using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;

namespace OliveHelpsLDK.Browser
{
    internal class BrowserClient : BaseClient<Proto.Browser.BrowserClient>, IBrowserService
    {
        internal BrowserClient(ChannelBase channelBase, Session session)
        {
            Client = new Proto.Browser.BrowserClient(channelBase);
            Session = session;
        }

        public Task<string> QueryActiveURL(CancellationToken cancellationToken = default)
        {
            var request = new Proto.BrowserActiveURLRequest
            {
                Session = CreateSession()
            };
            return Client.BrowserActiveURLAsync(request, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(task => task.Result.Url, cancellationToken);
        }

        public IStreamingCall<string> StreamActiveURL(CancellationToken cancellationToken = default)
        {
            var request = new Proto.BrowserActiveURLStreamRequest
            {
                Session = CreateSession()
            };
            var call = Client.BrowserActiveURLStream(request, CreateOptions(cancellationToken));
            return new StreamingCall<Proto.BrowserActiveURLStreamResponse, string>(call, resp => resp.Url);
        }

        public Task<SelectedText> QuerySelectedText(CancellationToken cancellationToken = default)
        {
            var request = new Proto.BrowserSelectedTextRequest()
            {
                Session = CreateSession()
            };
            return Client.BrowserSelectedTextAsync(request, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(task => FromProto(task.Result), cancellationToken);
        }

        public IStreamingCall<SelectedText> StreamSelectedText(CancellationToken cancellationToken = default)
        {
            var request = new Proto.BrowserSelectedTextStreamRequest()
            {
                Session = CreateSession()
            };
            var call = Client.BrowserSelectedTextStream(request, CreateOptions(cancellationToken));
            return new StreamingCall<Proto.BrowserSelectedTextStreamResponse, SelectedText>(call, FromProto);
        }

        internal static SelectedText FromProto(Proto.BrowserSelectedTextResponse response)
        {
            return new SelectedText
            {
                TabTitle = response.TabTitle,
                Text = response.Text,
                URL = response.Url,
            };
        }

        internal static SelectedText FromProto(Proto.BrowserSelectedTextStreamResponse response)
        {
            return new SelectedText
            {
                TabTitle = response.TabTitle,
                Text = response.Text,
                URL = response.Url,
            };
        }
    }
}