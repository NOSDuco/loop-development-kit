import BaseClient, { GRPCClientConstructor } from './baseClient';
import { ConfigurationClient as ConfigurationGRPCClient } from '../grpc/configuration_grpc_pb';
import { ConfigurationService } from './configurationService';
/**
 * @internal
 */
export default class ConfigurationClient extends BaseClient<ConfigurationGRPCClient> implements ConfigurationService {
    /**
     * Delete a key from configuration.
     *
     * @async
     * @param key - The name of the key in configuration.
     */
    configurationDelete(key: string): Promise<void>;
    /**
     * Check if a key has a value defined in configuration.
     *
     * @async
     * @param key - The name of the key in configuration.
     * @returns Returns true if the key has a defined value.
     */
    configurationExists(key: string): Promise<boolean>;
    /**
     * Get the value of a key in configuration.
     *
     * @param key - The name of the key in configuration.
     * @returns Promise resolving with the value of the key in configuration.
     */
    configurationRead(key: string): Promise<string>;
    /**
     * Get the value of a key in configuration.
     *
     * @async
     * @param key - The name of the key in configuration.
     * @param value - The value to assign to the key in configuration.
     */
    configurationWrite(key: string, value: string): Promise<void>;
    protected generateClient(): GRPCClientConstructor<ConfigurationGRPCClient>;
    protected serviceName(): string;
}
