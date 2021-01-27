// package: proto
// file: configuration.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as session_pb from "./session_pb";

export class ConfigurationExistsRequest extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): session_pb.Session | undefined;
    setSession(value?: session_pb.Session): ConfigurationExistsRequest;

    getKey(): string;
    setKey(value: string): ConfigurationExistsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigurationExistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigurationExistsRequest): ConfigurationExistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigurationExistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigurationExistsRequest;
    static deserializeBinaryFromReader(message: ConfigurationExistsRequest, reader: jspb.BinaryReader): ConfigurationExistsRequest;
}

export namespace ConfigurationExistsRequest {
    export type AsObject = {
        session?: session_pb.Session.AsObject,
        key: string,
    }
}

export class ConfigurationExistsResponse extends jspb.Message { 
    getExists(): boolean;
    setExists(value: boolean): ConfigurationExistsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigurationExistsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigurationExistsResponse): ConfigurationExistsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigurationExistsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigurationExistsResponse;
    static deserializeBinaryFromReader(message: ConfigurationExistsResponse, reader: jspb.BinaryReader): ConfigurationExistsResponse;
}

export namespace ConfigurationExistsResponse {
    export type AsObject = {
        exists: boolean,
    }
}

export class ConfigurationReadRequest extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): session_pb.Session | undefined;
    setSession(value?: session_pb.Session): ConfigurationReadRequest;

    getKey(): string;
    setKey(value: string): ConfigurationReadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigurationReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigurationReadRequest): ConfigurationReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigurationReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigurationReadRequest;
    static deserializeBinaryFromReader(message: ConfigurationReadRequest, reader: jspb.BinaryReader): ConfigurationReadRequest;
}

export namespace ConfigurationReadRequest {
    export type AsObject = {
        session?: session_pb.Session.AsObject,
        key: string,
    }
}

export class ConfigurationReadResponse extends jspb.Message { 
    getValue(): string;
    setValue(value: string): ConfigurationReadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigurationReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigurationReadResponse): ConfigurationReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigurationReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigurationReadResponse;
    static deserializeBinaryFromReader(message: ConfigurationReadResponse, reader: jspb.BinaryReader): ConfigurationReadResponse;
}

export namespace ConfigurationReadResponse {
    export type AsObject = {
        value: string,
    }
}

export class ConfigurationDeleteRequest extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): session_pb.Session | undefined;
    setSession(value?: session_pb.Session): ConfigurationDeleteRequest;

    getKey(): string;
    setKey(value: string): ConfigurationDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigurationDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigurationDeleteRequest): ConfigurationDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigurationDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigurationDeleteRequest;
    static deserializeBinaryFromReader(message: ConfigurationDeleteRequest, reader: jspb.BinaryReader): ConfigurationDeleteRequest;
}

export namespace ConfigurationDeleteRequest {
    export type AsObject = {
        session?: session_pb.Session.AsObject,
        key: string,
    }
}

export class ConfigurationWriteRequest extends jspb.Message { 

    hasSession(): boolean;
    clearSession(): void;
    getSession(): session_pb.Session | undefined;
    setSession(value?: session_pb.Session): ConfigurationWriteRequest;

    getKey(): string;
    setKey(value: string): ConfigurationWriteRequest;

    getValue(): string;
    setValue(value: string): ConfigurationWriteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigurationWriteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigurationWriteRequest): ConfigurationWriteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigurationWriteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigurationWriteRequest;
    static deserializeBinaryFromReader(message: ConfigurationWriteRequest, reader: jspb.BinaryReader): ConfigurationWriteRequest;
}

export namespace ConfigurationWriteRequest {
    export type AsObject = {
        session?: session_pb.Session.AsObject,
        key: string,
        value: string,
    }
}
