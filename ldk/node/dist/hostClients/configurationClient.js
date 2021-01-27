"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseClient_1 = __importDefault(require("./baseClient"));
const configuration_grpc_pb_1 = require("../grpc/configuration_grpc_pb");
const configuration_pb_1 = __importDefault(require("../grpc/configuration_pb"));
/**
 * @internal
 */
class ConfigurationClient extends baseClient_1.default {
    /**
     * Delete a key from configuration.
     *
     * @async
     * @param key - The name of the key in configuration.
     */
    configurationDelete(key) {
        return this.buildQuery((message, callback) => this.client.configurationDelete(message, callback), () => {
            const msg = new configuration_pb_1.default.ConfigurationDeleteRequest();
            msg.setKey(key);
            return msg;
        }, 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => { });
    }
    /**
     * Check if a key has a value defined in configuration.
     *
     * @async
     * @param key - The name of the key in configuration.
     * @returns Returns true if the key has a defined value.
     */
    configurationExists(key) {
        return this.buildQuery((message, callback) => this.client.configurationExists(message, callback), () => {
            const msg = new configuration_pb_1.default.ConfigurationExistsRequest();
            msg.setKey(key);
            return msg;
        }, (response) => response.getExists());
    }
    /**
     * Get the value of a key in configuration.
     *
     * @param key - The name of the key in configuration.
     * @returns Promise resolving with the value of the key in configuration.
     */
    configurationRead(key) {
        return this.buildQuery((message, callback) => this.client.configurationRead(message, callback), () => {
            const msg = new configuration_pb_1.default.ConfigurationReadRequest();
            msg.setKey(key);
            return msg;
        }, 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        (response) => response.getValue());
    }
    /**
     * Get the value of a key in configuration.
     *
     * @async
     * @param key - The name of the key in configuration.
     * @param value - The value to assign to the key in configuration.
     */
    configurationWrite(key, value) {
        return this.buildQuery((message, callback) => this.client.configurationWrite(message, callback), () => {
            const msg = new configuration_pb_1.default.ConfigurationWriteRequest();
            msg.setKey(key);
            msg.setValue(value);
            return msg;
        }, 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => { });
    }
    generateClient() {
        return configuration_grpc_pb_1.ConfigurationClient;
    }
    serviceName() {
        return 'configuration';
    }
}
exports.default = ConfigurationClient;
