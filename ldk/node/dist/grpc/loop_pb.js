"use strict";
// source: loop.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var session_pb = require('./session_pb.js');
goog.object.extend(proto, session_pb);
goog.exportSymbol('proto.proto.LoopStartRequest', null, global);
goog.exportSymbol('proto.proto.serviceHosts', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.serviceHosts = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.serviceHosts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.serviceHosts.displayName = 'proto.proto.serviceHosts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.LoopStartRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.LoopStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.proto.LoopStartRequest.displayName = 'proto.proto.LoopStartRequest';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.proto.serviceHosts.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.serviceHosts.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.serviceHosts} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.serviceHosts.toObject = function (includeInstance, msg) {
        var f, obj = {
            hostbrokerid: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.serviceHosts}
 */
proto.proto.serviceHosts.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.serviceHosts;
    return proto.proto.serviceHosts.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.serviceHosts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.serviceHosts}
 */
proto.proto.serviceHosts.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setHostbrokerid(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.serviceHosts.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.serviceHosts.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.serviceHosts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.serviceHosts.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getHostbrokerid();
    if (f !== 0) {
        writer.writeUint32(1, f);
    }
};
/**
 * optional uint32 hostBrokerId = 1;
 * @return {number}
 */
proto.proto.serviceHosts.prototype.getHostbrokerid = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/**
 * @param {number} value
 * @return {!proto.proto.serviceHosts} returns this
 */
proto.proto.serviceHosts.prototype.setHostbrokerid = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.proto.LoopStartRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.proto.LoopStartRequest.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.proto.LoopStartRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.proto.LoopStartRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            session: (f = msg.getSession()) && session_pb.Session.toObject(includeInstance, f),
            servicehosts: (f = msg.getServicehosts()) && proto.proto.serviceHosts.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.LoopStartRequest}
 */
proto.proto.LoopStartRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.proto.LoopStartRequest;
    return proto.proto.LoopStartRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.LoopStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.LoopStartRequest}
 */
proto.proto.LoopStartRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new session_pb.Session;
                reader.readMessage(value, session_pb.Session.deserializeBinaryFromReader);
                msg.setSession(value);
                break;
            case 2:
                var value = new proto.proto.serviceHosts;
                reader.readMessage(value, proto.proto.serviceHosts.deserializeBinaryFromReader);
                msg.setServicehosts(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.LoopStartRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.proto.LoopStartRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.LoopStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LoopStartRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSession();
    if (f != null) {
        writer.writeMessage(1, f, session_pb.Session.serializeBinaryToWriter);
    }
    f = message.getServicehosts();
    if (f != null) {
        writer.writeMessage(2, f, proto.proto.serviceHosts.serializeBinaryToWriter);
    }
};
/**
 * optional Session session = 1;
 * @return {?proto.proto.Session}
 */
proto.proto.LoopStartRequest.prototype.getSession = function () {
    return /** @type{?proto.proto.Session} */ (jspb.Message.getWrapperField(this, session_pb.Session, 1));
};
/**
 * @param {?proto.proto.Session|undefined} value
 * @return {!proto.proto.LoopStartRequest} returns this
*/
proto.proto.LoopStartRequest.prototype.setSession = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.LoopStartRequest} returns this
 */
proto.proto.LoopStartRequest.prototype.clearSession = function () {
    return this.setSession(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LoopStartRequest.prototype.hasSession = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional serviceHosts serviceHosts = 2;
 * @return {?proto.proto.serviceHosts}
 */
proto.proto.LoopStartRequest.prototype.getServicehosts = function () {
    return /** @type{?proto.proto.serviceHosts} */ (jspb.Message.getWrapperField(this, proto.proto.serviceHosts, 2));
};
/**
 * @param {?proto.proto.serviceHosts|undefined} value
 * @return {!proto.proto.LoopStartRequest} returns this
*/
proto.proto.LoopStartRequest.prototype.setServicehosts = function (value) {
    return jspb.Message.setWrapperField(this, 2, value);
};
/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.LoopStartRequest} returns this
 */
proto.proto.LoopStartRequest.prototype.clearServicehosts = function () {
    return this.setServicehosts(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.LoopStartRequest.prototype.hasServicehosts = function () {
    return jspb.Message.getField(this, 2) != null;
};
goog.object.extend(exports, proto.proto);
