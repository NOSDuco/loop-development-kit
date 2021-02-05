import BaseClient, { GRPCClientConstructor } from './baseClient';
import { CursorClient as CursorGRPCClient } from '../grpc/cursor_grpc_pb';
import messages from '../grpc/cursor_pb';
import { CursorSensor, CursorResponse } from './cursorSensor';
import { StreamTransformer, TransformingStream } from './transformingStream';
import { StoppableStream, StreamListener } from './stoppables';

/**
 * @internal
 * @param message - The message to transform.
 */
const cursorTransformer: StreamTransformer<
  messages.CursorPositionStreamResponse | messages.CursorPositionResponse,
  CursorResponse
> = (message) => ({
  screen: message.getScreen(),
  x: message.getX(),
  y: message.getY(),
});

/**
 * @internal
 */
export class CursorClient
  extends BaseClient<CursorGRPCClient>
  implements CursorSensor {
  protected generateClient(): GRPCClientConstructor<CursorGRPCClient> {
    return CursorGRPCClient;
  }

  queryCursorPosition(): Promise<CursorResponse> {
    return this.buildQuery<
      messages.CursorPositionRequest,
      messages.CursorPositionResponse,
      CursorResponse
    >(
      (message, callback) => this.client.cursorPosition(message, callback),
      () => new messages.CursorPositionRequest(),
      cursorTransformer,
    );
  }

  streamCursorPosition(
    listener: StreamListener<CursorResponse>,
  ): StoppableStream<CursorResponse> {
    return new TransformingStream<
      messages.CursorPositionStreamResponse,
      CursorResponse
    >(
      this.client.cursorPositionStream(
        new messages.CursorPositionStreamRequest().setSession(
          this.createSessionMessage(),
        ),
      ),
      cursorTransformer,
      listener,
    );
  }

  protected sensorName(): string {
    return 'cursor';
  }
}
