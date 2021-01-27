/**
 * The ConfigurationService allows users to save/load data from a configuration store. The Configuration values can be modified by the user.
 */
export interface ConfigurationService {
  /**
   * @param key - Key of the item to delete from the configuration store.
   * @returns Promise that resolves when the deletion completes.
   */
  configurationDelete(key: string): Promise<void>;

  /**
   * @param key - Key to check for presence.
   * @returns Promise resolve with whether the configuration store has the key (true) or not (false).
   */
  configurationExists(key: string): Promise<boolean>;

  /**
   * Reads the value from the configuration store and returns it in a promise.
   *
   * @param key - Key to read from configuration.
   * @returns Resolves with the value of the key.
   */
  configurationRead(key: string): Promise<string>;

  /**
   * Writes a value to the configuration store.
   *
   * @param key Key to write value to.
   * @param value The value being written.
   * @returns Resolves when write is complete.
   */
  configurationWrite(key: string, value: string): Promise<void>;
}
