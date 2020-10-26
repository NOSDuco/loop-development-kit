package ldk

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes/empty"
	"github.com/open-olive/loop-development-kit-go/proto"
	"google.golang.org/protobuf/types/known/emptypb"
)

// ClipboardServer is used by the controller plugin host to receive plugin initiated communication
type ClipboardServer struct {
	Impl ClipboardService
}

// ClipboardRead is used by plugins to get the value of an entry
func (m *ClipboardServer) ClipboardRead(ctx context.Context, req *emptypb.Empty) (*proto.ClipboardReadResponse, error) {
	value, err := m.Impl.Read()
	if err != nil {
		return nil, err
	}

	return &proto.ClipboardReadResponse{
		Text: value,
	}, nil
}

// ClipboardReadStream is used by plugins to get the value of an entry
func (m *ClipboardServer) ClipboardReadStream(emp *empty.Empty, stream proto.Clipboard_ClipboardReadStreamServer) error {
	handler := func(text string, err error) {
		var errText string
		if err != nil {
			errText = err.Error()
		}
		if e := stream.Send(&proto.ClipboardReadStreamResponse{
			Error: errText,
			Text:  text,
		}); e != nil {
			// This should only happen if the context was cancelled for some reason and the stream shuts down.
			fmt.Println("error: ldk.ClipboardServer.ClipbardReadStream -> stream.Send:", e)
		}
	}

	go func() {
		err := m.Impl.Listen(stream.Context(), handler)
		// TODO: move this to a real logger once we move this into sidekick
		if err != nil {
			fmt.Println("error: ldk.ClipboardServer.ClipbardReadStream -> Listen:", err)
		}
	}()

	// don't exit this method until context is cancelled
	// if you do, the handler called above that tries to call `Send` will fail as the context will be cancelled due to leaving method scope
	<-stream.Context().Done()
	return nil
}

// ClipboardWrite is used by plugins to set an entry
func (m *ClipboardServer) ClipboardWrite(ctx context.Context, req *proto.ClipboardWriteRequest) (*emptypb.Empty, error) {
	err := m.Impl.Write(req.Text)
	if err != nil {
		return nil, err
	}

	return &emptypb.Empty{}, err
}
