// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.13.0
// source: hover.proto

package proto

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type HoverReadRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	XFromCenter uint32 `protobuf:"varint,1,opt,name=xFromCenter,proto3" json:"xFromCenter,omitempty"`
	YFromCenter uint32 `protobuf:"varint,2,opt,name=yFromCenter,proto3" json:"yFromCenter,omitempty"`
}

func (x *HoverReadRequest) Reset() {
	*x = HoverReadRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hover_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HoverReadRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HoverReadRequest) ProtoMessage() {}

func (x *HoverReadRequest) ProtoReflect() protoreflect.Message {
	mi := &file_hover_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HoverReadRequest.ProtoReflect.Descriptor instead.
func (*HoverReadRequest) Descriptor() ([]byte, []int) {
	return file_hover_proto_rawDescGZIP(), []int{0}
}

func (x *HoverReadRequest) GetXFromCenter() uint32 {
	if x != nil {
		return x.XFromCenter
	}
	return 0
}

func (x *HoverReadRequest) GetYFromCenter() uint32 {
	if x != nil {
		return x.YFromCenter
	}
	return 0
}

type HoverReadStreamRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	XFromCenter uint32 `protobuf:"varint,1,opt,name=xFromCenter,proto3" json:"xFromCenter,omitempty"`
	YFromCenter uint32 `protobuf:"varint,2,opt,name=yFromCenter,proto3" json:"yFromCenter,omitempty"`
}

func (x *HoverReadStreamRequest) Reset() {
	*x = HoverReadStreamRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hover_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HoverReadStreamRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HoverReadStreamRequest) ProtoMessage() {}

func (x *HoverReadStreamRequest) ProtoReflect() protoreflect.Message {
	mi := &file_hover_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HoverReadStreamRequest.ProtoReflect.Descriptor instead.
func (*HoverReadStreamRequest) Descriptor() ([]byte, []int) {
	return file_hover_proto_rawDescGZIP(), []int{1}
}

func (x *HoverReadStreamRequest) GetXFromCenter() uint32 {
	if x != nil {
		return x.XFromCenter
	}
	return 0
}

func (x *HoverReadStreamRequest) GetYFromCenter() uint32 {
	if x != nil {
		return x.YFromCenter
	}
	return 0
}

type HoverReadResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Text string `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *HoverReadResponse) Reset() {
	*x = HoverReadResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hover_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HoverReadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HoverReadResponse) ProtoMessage() {}

func (x *HoverReadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_hover_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HoverReadResponse.ProtoReflect.Descriptor instead.
func (*HoverReadResponse) Descriptor() ([]byte, []int) {
	return file_hover_proto_rawDescGZIP(), []int{2}
}

func (x *HoverReadResponse) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

type HoverReadStreamResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Text  string `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
	Error string `protobuf:"bytes,15,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *HoverReadStreamResponse) Reset() {
	*x = HoverReadStreamResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hover_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HoverReadStreamResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HoverReadStreamResponse) ProtoMessage() {}

func (x *HoverReadStreamResponse) ProtoReflect() protoreflect.Message {
	mi := &file_hover_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HoverReadStreamResponse.ProtoReflect.Descriptor instead.
func (*HoverReadStreamResponse) Descriptor() ([]byte, []int) {
	return file_hover_proto_rawDescGZIP(), []int{3}
}

func (x *HoverReadStreamResponse) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *HoverReadStreamResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

var File_hover_proto protoreflect.FileDescriptor

var file_hover_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x68, 0x6f, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x56, 0x0a, 0x10, 0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x20, 0x0a, 0x0b, 0x78, 0x46, 0x72, 0x6f,
	0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0b, 0x78,
	0x46, 0x72, 0x6f, 0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x12, 0x20, 0x0a, 0x0b, 0x79, 0x46,
	0x72, 0x6f, 0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0b, 0x79, 0x46, 0x72, 0x6f, 0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x22, 0x5c, 0x0a, 0x16,
	0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x20, 0x0a, 0x0b, 0x78, 0x46, 0x72, 0x6f, 0x6d, 0x43,
	0x65, 0x6e, 0x74, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0b, 0x78, 0x46, 0x72,
	0x6f, 0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x12, 0x20, 0x0a, 0x0b, 0x79, 0x46, 0x72, 0x6f,
	0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0b, 0x79,
	0x46, 0x72, 0x6f, 0x6d, 0x43, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x22, 0x27, 0x0a, 0x11, 0x48, 0x6f,
	0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74,
	0x65, 0x78, 0x74, 0x22, 0x43, 0x0a, 0x17, 0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65,
	0x78, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x0f, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x32, 0x9b, 0x01, 0x0a, 0x05, 0x48, 0x6f, 0x76,
	0x65, 0x72, 0x12, 0x3e, 0x0a, 0x09, 0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x12,
	0x17, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61,
	0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x52, 0x0a, 0x0f, 0x48, 0x6f, 0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x53,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x1d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x48, 0x6f,
	0x76, 0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x48, 0x6f, 0x76,
	0x65, 0x72, 0x52, 0x65, 0x61, 0x64, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x30, 0x01, 0x42, 0x09, 0x5a, 0x07, 0x2e, 0x3b, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_hover_proto_rawDescOnce sync.Once
	file_hover_proto_rawDescData = file_hover_proto_rawDesc
)

func file_hover_proto_rawDescGZIP() []byte {
	file_hover_proto_rawDescOnce.Do(func() {
		file_hover_proto_rawDescData = protoimpl.X.CompressGZIP(file_hover_proto_rawDescData)
	})
	return file_hover_proto_rawDescData
}

var file_hover_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_hover_proto_goTypes = []interface{}{
	(*HoverReadRequest)(nil),        // 0: proto.HoverReadRequest
	(*HoverReadStreamRequest)(nil),  // 1: proto.HoverReadStreamRequest
	(*HoverReadResponse)(nil),       // 2: proto.HoverReadResponse
	(*HoverReadStreamResponse)(nil), // 3: proto.HoverReadStreamResponse
}
var file_hover_proto_depIdxs = []int32{
	0, // 0: proto.Hover.HoverRead:input_type -> proto.HoverReadRequest
	1, // 1: proto.Hover.HoverReadStream:input_type -> proto.HoverReadStreamRequest
	2, // 2: proto.Hover.HoverRead:output_type -> proto.HoverReadResponse
	3, // 3: proto.Hover.HoverReadStream:output_type -> proto.HoverReadStreamResponse
	2, // [2:4] is the sub-list for method output_type
	0, // [0:2] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_hover_proto_init() }
func file_hover_proto_init() {
	if File_hover_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_hover_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HoverReadRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_hover_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HoverReadStreamRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_hover_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HoverReadResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_hover_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HoverReadStreamResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_hover_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_hover_proto_goTypes,
		DependencyIndexes: file_hover_proto_depIdxs,
		MessageInfos:      file_hover_proto_msgTypes,
	}.Build()
	File_hover_proto = out.File
	file_hover_proto_rawDesc = nil
	file_hover_proto_goTypes = nil
	file_hover_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// HoverClient is the client API for Hover service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type HoverClient interface {
	// read the text under the cursor
	HoverRead(ctx context.Context, in *HoverReadRequest, opts ...grpc.CallOption) (*HoverReadResponse, error)
	// stream the text under the cursor as it changes
	HoverReadStream(ctx context.Context, in *HoverReadStreamRequest, opts ...grpc.CallOption) (Hover_HoverReadStreamClient, error)
}

type hoverClient struct {
	cc grpc.ClientConnInterface
}

func NewHoverClient(cc grpc.ClientConnInterface) HoverClient {
	return &hoverClient{cc}
}

func (c *hoverClient) HoverRead(ctx context.Context, in *HoverReadRequest, opts ...grpc.CallOption) (*HoverReadResponse, error) {
	out := new(HoverReadResponse)
	err := c.cc.Invoke(ctx, "/proto.Hover/HoverRead", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *hoverClient) HoverReadStream(ctx context.Context, in *HoverReadStreamRequest, opts ...grpc.CallOption) (Hover_HoverReadStreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Hover_serviceDesc.Streams[0], "/proto.Hover/HoverReadStream", opts...)
	if err != nil {
		return nil, err
	}
	x := &hoverHoverReadStreamClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Hover_HoverReadStreamClient interface {
	Recv() (*HoverReadStreamResponse, error)
	grpc.ClientStream
}

type hoverHoverReadStreamClient struct {
	grpc.ClientStream
}

func (x *hoverHoverReadStreamClient) Recv() (*HoverReadStreamResponse, error) {
	m := new(HoverReadStreamResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// HoverServer is the server API for Hover service.
type HoverServer interface {
	// read the text under the cursor
	HoverRead(context.Context, *HoverReadRequest) (*HoverReadResponse, error)
	// stream the text under the cursor as it changes
	HoverReadStream(*HoverReadStreamRequest, Hover_HoverReadStreamServer) error
}

// UnimplementedHoverServer can be embedded to have forward compatible implementations.
type UnimplementedHoverServer struct {
}

func (*UnimplementedHoverServer) HoverRead(context.Context, *HoverReadRequest) (*HoverReadResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method HoverRead not implemented")
}
func (*UnimplementedHoverServer) HoverReadStream(*HoverReadStreamRequest, Hover_HoverReadStreamServer) error {
	return status.Errorf(codes.Unimplemented, "method HoverReadStream not implemented")
}

func RegisterHoverServer(s *grpc.Server, srv HoverServer) {
	s.RegisterService(&_Hover_serviceDesc, srv)
}

func _Hover_HoverRead_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HoverReadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HoverServer).HoverRead(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Hover/HoverRead",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HoverServer).HoverRead(ctx, req.(*HoverReadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Hover_HoverReadStream_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(HoverReadStreamRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(HoverServer).HoverReadStream(m, &hoverHoverReadStreamServer{stream})
}

type Hover_HoverReadStreamServer interface {
	Send(*HoverReadStreamResponse) error
	grpc.ServerStream
}

type hoverHoverReadStreamServer struct {
	grpc.ServerStream
}

func (x *hoverHoverReadStreamServer) Send(m *HoverReadStreamResponse) error {
	return x.ServerStream.SendMsg(m)
}

var _Hover_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.Hover",
	HandlerType: (*HoverServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "HoverRead",
			Handler:    _Hover_HoverRead_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "HoverReadStream",
			Handler:       _Hover_HoverReadStream_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "hover.proto",
}
