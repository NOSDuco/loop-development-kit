import {
  ClientReadableStream,
  ClientReadableStreamImpl,
  ClientUnaryCall,
  ClientUnaryCallImpl,
  ServiceError,
} from '@grpc/grpc-js/build/src/call';
import { Deadline } from '@grpc/grpc-js';
import { ConnInfo } from './grpc/broker_pb';
import { Session } from './grpc/session_pb';
import BaseClient, { GRPCClientConstructor } from './hostClients/baseClient';
import { ILogger, Logger } from './logging';
import { TestLogger } from './testLogger';

/**
 * @internal
 */
export function buildLogger(): ILogger {
  if (process.env.TEST_LOGGING != null) {
    return new Logger('test-logger');
  }
  return new TestLogger();
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export type CallbackFunc<TResponse = any> = (
  err: ServiceError | null,
  response: TResponse,
) => void;
/**
 * A simple callback handler that passes back the response when the callback gets invoked
 *
 * @param response - the response to pass through when the callback gets invoked
 * @param error - an optional error to pass to the callback
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function createCallbackHandler<TRequest, TResponse>(
  response?: TResponse,
  error?: ServiceError,
) {
  return ((request: TRequest, callback: CallbackFunc): ClientUnaryCall => {
    const clientCall = new ClientUnaryCallImpl();

    callback(error || null, response);

    return clientCall;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
}

type WaitFunc = (err: Error | undefined) => void;

/**
 * A simple wait handler that stands in for what gRPC implements
 */
export function createWaitHandler() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (deadline: Deadline, callback: WaitFunc): void => {
    callback(undefined);
  };
}

/**
 * A stream that is largely a target for later emits
 */
export function createEmptyStream<
  TResponse
>(): ClientReadableStream<TResponse> {
  return new ClientReadableStreamImpl<TResponse>(() => ({} as TResponse));
}

/**
 * A simple streaming handler that passes back the response for every stream chunk
 *
 * @param stream - an optional stream to use, if you don't want this to create it for you
 */
export function createStreamingHandler<TResponse>(
  stream?: ClientReadableStream<TResponse>,
) {
  return (): ClientReadableStream<TResponse> => {
    if (stream) {
      return stream;
    }

    return createEmptyStream();
  };
}

interface CaptureParameters {
  call?: number;
  position?: number;
}
/**
 * A argument capture function for jest mocks that lets you do further investigation on a captured argument
 *
 * @param mock - a mock that you want to capture arguments for
 * @param params - the optional parameters for what call and arg to capture
 */
export function captureMockArgument<TArgument>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mock: jest.MockInstance<any, any>,
  params?: CaptureParameters,
): TArgument {
  const call = params?.call || 0;
  const position = params?.position || 0;

  const called = mock.mock.calls[call];
  if (!called) {
    throw new Error(`mock ${mock} was not called at least ${call} times`);
  }

  return called[position] as TArgument;
}

/**
 * An identity callback that passes the value through and ignores any errors.
 *
 * @param err - the error passed to the callback (ignored)
 * @param value - the value passed to the callback (passed through)
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function identityCallback(err: any, value: any) {
  return value;
}

export const defaultConnInfo: ConnInfo.AsObject = {
  address: 'a',
  serviceId: 1,
  network: 'n',
};

export const defaultSession: Session.AsObject = {
  loopid: 'LOOP_ID',
  token: 'TOKEN',
};

export class FakeGRPCClient {
  waitForReady(deadline: Deadline, callback: (error?: Error) => void): void {
    callback(undefined);
  }
}

export class FakeHostServer extends BaseClient<FakeGRPCClient> {
  protected generateClient(): GRPCClientConstructor<FakeGRPCClient> {
    return FakeGRPCClient;
  }

  protected sensorName(): string {
    return '';
  }
}

export class FakeRequestMessage {
  private session: Session | undefined;

  setSession(session: Session): void {
    this.session = session;
  }
}

export class FakeResponseMessage {
  private readonly message: string;

  private readonly error: string;

  constructor(message: string, error = '') {
    this.message = message;
    this.error = error;
  }

  getMessage(): string {
    return this.message;
  }

  getError(): string {
    return this.error;
  }
}
