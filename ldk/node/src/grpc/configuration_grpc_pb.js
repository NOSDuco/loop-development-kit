// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var configuration_pb = require('./configuration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var session_pb = require('./session_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ConfigurationDeleteRequest(arg) {
  if (!(arg instanceof configuration_pb.ConfigurationDeleteRequest)) {
    throw new Error('Expected argument of type proto.ConfigurationDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigurationDeleteRequest(buffer_arg) {
  return configuration_pb.ConfigurationDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ConfigurationExistsRequest(arg) {
  if (!(arg instanceof configuration_pb.ConfigurationExistsRequest)) {
    throw new Error('Expected argument of type proto.ConfigurationExistsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigurationExistsRequest(buffer_arg) {
  return configuration_pb.ConfigurationExistsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ConfigurationExistsResponse(arg) {
  if (!(arg instanceof configuration_pb.ConfigurationExistsResponse)) {
    throw new Error('Expected argument of type proto.ConfigurationExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigurationExistsResponse(buffer_arg) {
  return configuration_pb.ConfigurationExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ConfigurationReadRequest(arg) {
  if (!(arg instanceof configuration_pb.ConfigurationReadRequest)) {
    throw new Error('Expected argument of type proto.ConfigurationReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigurationReadRequest(buffer_arg) {
  return configuration_pb.ConfigurationReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ConfigurationReadResponse(arg) {
  if (!(arg instanceof configuration_pb.ConfigurationReadResponse)) {
    throw new Error('Expected argument of type proto.ConfigurationReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigurationReadResponse(buffer_arg) {
  return configuration_pb.ConfigurationReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ConfigurationWriteRequest(arg) {
  if (!(arg instanceof configuration_pb.ConfigurationWriteRequest)) {
    throw new Error('Expected argument of type proto.ConfigurationWriteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ConfigurationWriteRequest(buffer_arg) {
  return configuration_pb.ConfigurationWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConfigurationService = exports.ConfigurationService = {
  // Delete the value of a specific key
configurationDelete: {
    path: '/proto.Configuration/ConfigurationDelete',
    requestStream: false,
    responseStream: false,
    requestType: configuration_pb.ConfigurationDeleteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_proto_ConfigurationDeleteRequest,
    requestDeserialize: deserialize_proto_ConfigurationDeleteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Check in configuration storage to determine if a key has a value
configurationExists: {
    path: '/proto.Configuration/ConfigurationExists',
    requestStream: false,
    responseStream: false,
    requestType: configuration_pb.ConfigurationExistsRequest,
    responseType: configuration_pb.ConfigurationExistsResponse,
    requestSerialize: serialize_proto_ConfigurationExistsRequest,
    requestDeserialize: deserialize_proto_ConfigurationExistsRequest,
    responseSerialize: serialize_proto_ConfigurationExistsResponse,
    responseDeserialize: deserialize_proto_ConfigurationExistsResponse,
  },
  // Read the value of a specific configuration key
configurationRead: {
    path: '/proto.Configuration/ConfigurationRead',
    requestStream: false,
    responseStream: false,
    requestType: configuration_pb.ConfigurationReadRequest,
    responseType: configuration_pb.ConfigurationReadResponse,
    requestSerialize: serialize_proto_ConfigurationReadRequest,
    requestDeserialize: deserialize_proto_ConfigurationReadRequest,
    responseSerialize: serialize_proto_ConfigurationReadResponse,
    responseDeserialize: deserialize_proto_ConfigurationReadResponse,
  },
  // Write the value of a key to configuration storage
configurationWrite: {
    path: '/proto.Configuration/ConfigurationWrite',
    requestStream: false,
    responseStream: false,
    requestType: configuration_pb.ConfigurationWriteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_proto_ConfigurationWriteRequest,
    requestDeserialize: deserialize_proto_ConfigurationWriteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ConfigurationClient = grpc.makeGenericClientConstructor(ConfigurationService);
