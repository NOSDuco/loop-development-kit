// package: proto
// file: configuration.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as configuration_pb from "./configuration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as session_pb from "./session_pb";

interface IConfigurationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    configurationDelete: IConfigurationService_IConfigurationDelete;
    configurationExists: IConfigurationService_IConfigurationExists;
    configurationRead: IConfigurationService_IConfigurationRead;
    configurationWrite: IConfigurationService_IConfigurationWrite;
}

interface IConfigurationService_IConfigurationDelete extends grpc.MethodDefinition<configuration_pb.ConfigurationDeleteRequest, google_protobuf_empty_pb.Empty> {
    path: "/proto.Configuration/ConfigurationDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<configuration_pb.ConfigurationDeleteRequest>;
    requestDeserialize: grpc.deserialize<configuration_pb.ConfigurationDeleteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IConfigurationService_IConfigurationExists extends grpc.MethodDefinition<configuration_pb.ConfigurationExistsRequest, configuration_pb.ConfigurationExistsResponse> {
    path: "/proto.Configuration/ConfigurationExists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<configuration_pb.ConfigurationExistsRequest>;
    requestDeserialize: grpc.deserialize<configuration_pb.ConfigurationExistsRequest>;
    responseSerialize: grpc.serialize<configuration_pb.ConfigurationExistsResponse>;
    responseDeserialize: grpc.deserialize<configuration_pb.ConfigurationExistsResponse>;
}
interface IConfigurationService_IConfigurationRead extends grpc.MethodDefinition<configuration_pb.ConfigurationReadRequest, configuration_pb.ConfigurationReadResponse> {
    path: "/proto.Configuration/ConfigurationRead";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<configuration_pb.ConfigurationReadRequest>;
    requestDeserialize: grpc.deserialize<configuration_pb.ConfigurationReadRequest>;
    responseSerialize: grpc.serialize<configuration_pb.ConfigurationReadResponse>;
    responseDeserialize: grpc.deserialize<configuration_pb.ConfigurationReadResponse>;
}
interface IConfigurationService_IConfigurationWrite extends grpc.MethodDefinition<configuration_pb.ConfigurationWriteRequest, google_protobuf_empty_pb.Empty> {
    path: "/proto.Configuration/ConfigurationWrite";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<configuration_pb.ConfigurationWriteRequest>;
    requestDeserialize: grpc.deserialize<configuration_pb.ConfigurationWriteRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ConfigurationService: IConfigurationService;

export interface IConfigurationServer {
    configurationDelete: grpc.handleUnaryCall<configuration_pb.ConfigurationDeleteRequest, google_protobuf_empty_pb.Empty>;
    configurationExists: grpc.handleUnaryCall<configuration_pb.ConfigurationExistsRequest, configuration_pb.ConfigurationExistsResponse>;
    configurationRead: grpc.handleUnaryCall<configuration_pb.ConfigurationReadRequest, configuration_pb.ConfigurationReadResponse>;
    configurationWrite: grpc.handleUnaryCall<configuration_pb.ConfigurationWriteRequest, google_protobuf_empty_pb.Empty>;
}

export interface IConfigurationClient {
    configurationDelete(request: configuration_pb.ConfigurationDeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    configurationDelete(request: configuration_pb.ConfigurationDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    configurationDelete(request: configuration_pb.ConfigurationDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    configurationExists(request: configuration_pb.ConfigurationExistsRequest, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationExistsResponse) => void): grpc.ClientUnaryCall;
    configurationExists(request: configuration_pb.ConfigurationExistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationExistsResponse) => void): grpc.ClientUnaryCall;
    configurationExists(request: configuration_pb.ConfigurationExistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationExistsResponse) => void): grpc.ClientUnaryCall;
    configurationRead(request: configuration_pb.ConfigurationReadRequest, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationReadResponse) => void): grpc.ClientUnaryCall;
    configurationRead(request: configuration_pb.ConfigurationReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationReadResponse) => void): grpc.ClientUnaryCall;
    configurationRead(request: configuration_pb.ConfigurationReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationReadResponse) => void): grpc.ClientUnaryCall;
    configurationWrite(request: configuration_pb.ConfigurationWriteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    configurationWrite(request: configuration_pb.ConfigurationWriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    configurationWrite(request: configuration_pb.ConfigurationWriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ConfigurationClient extends grpc.Client implements IConfigurationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public configurationDelete(request: configuration_pb.ConfigurationDeleteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public configurationDelete(request: configuration_pb.ConfigurationDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public configurationDelete(request: configuration_pb.ConfigurationDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public configurationExists(request: configuration_pb.ConfigurationExistsRequest, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationExistsResponse) => void): grpc.ClientUnaryCall;
    public configurationExists(request: configuration_pb.ConfigurationExistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationExistsResponse) => void): grpc.ClientUnaryCall;
    public configurationExists(request: configuration_pb.ConfigurationExistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationExistsResponse) => void): grpc.ClientUnaryCall;
    public configurationRead(request: configuration_pb.ConfigurationReadRequest, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationReadResponse) => void): grpc.ClientUnaryCall;
    public configurationRead(request: configuration_pb.ConfigurationReadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationReadResponse) => void): grpc.ClientUnaryCall;
    public configurationRead(request: configuration_pb.ConfigurationReadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: configuration_pb.ConfigurationReadResponse) => void): grpc.ClientUnaryCall;
    public configurationWrite(request: configuration_pb.ConfigurationWriteRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public configurationWrite(request: configuration_pb.ConfigurationWriteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public configurationWrite(request: configuration_pb.ConfigurationWriteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
