import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import BaseClient, { GRPCClientConstructor } from './baseClient';
import { ConfigurationClient as ConfigurationGRPCClient } from '../grpc/configuration_grpc_pb';
import messages from '../grpc/configuration_pb';
import { ConfigurationService } from './configurationService';

/**
 * @internal
 */
export default class ConfigurationClient
  extends BaseClient<ConfigurationGRPCClient>
  implements ConfigurationService {
  /**
   * Delete a key from configuration.
   *
   * @async
   * @param key - The name of the key in configuration.
   */
  configurationDelete(key: string): Promise<void> {
    return this.buildQuery<messages.ConfigurationDeleteRequest, Empty, void>(
      (message, callback) => this.client.configurationDelete(message, callback),
      () => {
        const msg = new messages.ConfigurationDeleteRequest();
        msg.setKey(key);
        return msg;
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
    );
  }

  /**
   * Check if a key has a value defined in configuration.
   *
   * @async
   * @param key - The name of the key in configuration.
   * @returns Returns true if the key has a defined value.
   */
  configurationExists(key: string): Promise<boolean> {
    return this.buildQuery<
      messages.ConfigurationExistsRequest,
      messages.ConfigurationExistsResponse,
      boolean
    >(
      (message, callback) => this.client.configurationExists(message, callback),
      () => {
        const msg = new messages.ConfigurationExistsRequest();
        msg.setKey(key);
        return msg;
      },
      (response) => response.getExists(),
    );
  }

  /**
   * Get the value of a key in configuration.
   *
   * @param key - The name of the key in configuration.
   * @returns Promise resolving with the value of the key in configuration.
   */
  configurationRead(key: string): Promise<string> {
    return this.buildQuery<
      messages.ConfigurationReadRequest,
      messages.ConfigurationReadResponse,
      string
    >(
      (message, callback) => this.client.configurationRead(message, callback),
      () => {
        const msg = new messages.ConfigurationReadRequest();
        msg.setKey(key);
        return msg;
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (response) => response.getValue(),
    );
  }

  /**
   * Get the value of a key in configuration.
   *
   * @async
   * @param key - The name of the key in configuration.
   * @param value - The value to assign to the key in configuration.
   */
  configurationWrite(key: string, value: string): Promise<void> {
    return this.buildQuery<messages.ConfigurationWriteRequest, Empty, void>(
      (message, callback) => this.client.configurationWrite(message, callback),
      () => {
        const msg = new messages.ConfigurationWriteRequest();
        msg.setKey(key);
        msg.setValue(value);
        return msg;
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
    );
  }

  protected generateClient(): GRPCClientConstructor<ConfigurationGRPCClient> {
    return ConfigurationGRPCClient;
  }

  protected serviceName(): string {
    return 'configuration';
  }
}
