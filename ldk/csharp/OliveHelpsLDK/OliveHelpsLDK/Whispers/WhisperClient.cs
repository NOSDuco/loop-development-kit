using System;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using Proto;

namespace OliveHelpsLDK.Whispers
{
    internal class WhisperClient : BaseClient, IWhisperService
    {
        private Proto.Whisper.WhisperClient client;

        public WhisperClient(ChannelBase channel, Session session)
        {
            client = new Whisper.WhisperClient(channel);
            _session = session;
        }

        public Task MarkdownAsync(WhisperMarkdown message, CancellationToken cancellationToken = default)
        {
            var request = new WhisperMarkdownRequest
            {
                Markdown = message.Markdown,
                Session = CreateSession(),
                Meta = GenerateMeta(message.Config)
            };
            var whisperMarkdownAsync =
                client.WhisperMarkdownAsync(request, new CallOptions(cancellationToken: cancellationToken));
            return whisperMarkdownAsync.ResponseAsync;
        }

        public Task<bool> ConfirmAsync(WhisperConfirm message, CancellationToken cancellationToken = default)
        {
            var request = new WhisperConfirmRequest
            {
                Markdown = message.Markdown,
                Session = CreateSession(),
                Meta = GenerateMeta(message.Config),
                RejectLabel = message.RejectLabel,
                ResolveLabel = message.ResolveLabel,
            };
            var call = client.WhisperConfirmAsync(request, new CallOptions(cancellationToken: cancellationToken));
            return call.ResponseAsync.ContinueWith(resp => resp.Result.Response, cancellationToken);
        }

        public async Task FormAsync(WhisperForm message, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        private static WhisperMeta GenerateMeta(WhisperConfig config)
        {
            return new WhisperMeta
            {
                Icon = config.Icon,
                Label = config.Label,
            };
        }
    }
}