using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using OliveHelpsLDK.Logging;
using Proto;

namespace OliveHelpsLDK.Configuration
{
    internal class ConfigurationClient : BaseClient<Proto.Configuration.ConfigurationClient>, IConfigurationService
    {
        internal ConfigurationClient(Proto.Configuration.ConfigurationClient client, Session session, ILogger logger) : base(
            client, session, logger, "configuration")
        {
        }

        internal ConfigurationClient(CallInvoker callInvoker, Session session, ILogger logger) : this(
            new Proto.Configuration.ConfigurationClient(callInvoker), session, logger)
        {
        }

        public Task<bool> HasKey(string key, CancellationToken cancellationToken = default)
        {
            var req = new ConfigurationExistsRequest
            {
                Key = key,
                Session = CreateSession()
            };
            var loggedParser = LoggedParser<Task<ConfigurationExistsResponse>, bool>(task => task.Result.Exists);
            return Client.ConfigurationExistsAsync(req, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(loggedParser, cancellationToken, TaskContinuationOptions.OnlyOnRanToCompletion,
                    TaskScheduler.Current);
        }

        public Task<string> Read(string key, CancellationToken cancellationToken = default)
        {
            var req = new ConfigurationReadRequest
            {
                Key = key,
                Session = CreateSession()
            };
            var loggedParser = LoggedParser<Task<ConfigurationReadResponse>, string>(task => task.Result.Value);
            return Client.ConfigurationReadAsync(req, CreateOptions(cancellationToken)).ResponseAsync
                .ContinueWith(loggedParser, cancellationToken, TaskContinuationOptions.OnlyOnRanToCompletion,
                    TaskScheduler.Current);
        }

        public Task Delete(string key, CancellationToken cancellationToken = default)
        {
            var req = new ConfigurationDeleteRequest
            {
                Key = key,
                Session = CreateSession()
            };
            return Client.ConfigurationDeleteAsync(req, CreateOptions(cancellationToken)).ResponseAsync;
        }

        public Task Write(string key, string value, CancellationToken cancellationToken = default)
        {
            var req = new ConfigurationWriteRequest
            {
                Key = key,
                Session = CreateSession()
            };
            return Client.ConfigurationWriteAsync(req, CreateOptions(cancellationToken)).ResponseAsync;
        }
    }
}