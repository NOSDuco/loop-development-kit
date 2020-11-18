using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using OliveHelpsLDK.Whispers.Forms;
using Proto;

namespace OliveHelpsLDK.Whispers
{
    internal class WhisperClient : BaseClient<Proto.Whisper.WhisperClient>, IWhisperService
    {
        internal IWhisperFormParser Parser { get; }
        internal IWhisperFormBuilder Builder { get; }

        public WhisperClient(ChannelBase channel, Session session, IWhisperFormBuilder formBuilder = null,
            IWhisperFormParser parser = null)
        {
            Parser = parser ?? new WhisperFormParser();
            Builder = formBuilder ?? new WhisperFormBuilder();
            Client = new Whisper.WhisperClient(channel);
            Session = session;
        }

        public Task MarkdownAsync(WhisperMarkdown message, CancellationToken cancellationToken = default)
        {
            var request = new WhisperMarkdownRequest
            {
                Markdown = message.Markdown,
                Session = CreateSession(),
                Meta = Builder.BuildMeta(message.Config)
            };
            var whisperMarkdownAsync =
                Client.WhisperMarkdownAsync(request, new CallOptions(cancellationToken: cancellationToken));
            return whisperMarkdownAsync.ResponseAsync;
        }

        public Task<bool> ConfirmAsync(WhisperConfirm message, CancellationToken cancellationToken = default)
        {
            var request = new WhisperConfirmRequest
            {
                Markdown = message.Markdown,
                Session = CreateSession(),
                Meta = Builder.BuildMeta(message.Config),
                RejectLabel = message.RejectLabel,
                ResolveLabel = message.ResolveLabel,
            };
            var call = Client.WhisperConfirmAsync(request, new CallOptions(cancellationToken: cancellationToken));
            return call.ResponseAsync.ContinueWith(resp => resp.Result.Response, cancellationToken);
        }

        public IStreamingCall<IWhisperFormResponse> FormAsync(WhisperForm message,
            CancellationToken cancellationToken = default)
        {
            var request = Builder.BuildRequest(message, CreateSession());
            var call = Client.WhisperForm(request, CreateOptions(cancellationToken));
            return new StreamingCall<WhisperFormStreamResponse, IWhisperFormResponse>(call,
                response => Parser.ParseResponse(response));
        }
    }
}