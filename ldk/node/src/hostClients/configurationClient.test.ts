import { mocked } from 'ts-jest/utils';
import createMockInstance from 'jest-create-mock-instance';
import * as Services from '../grpc/configuration_grpc_pb';
import * as Messages from '../grpc/configuration_pb';
import { ConnInfo } from '../grpc/broker_pb';
import ConfigurationClient from './configurationClient';
import { Session } from '../grpc/session_pb';
import {
  buildLogger,
  captureMockArgument,
  createCallbackHandler,
  createWaitHandler,
  defaultConnInfo,
  defaultSession,
} from '../test.helpers';

jest.mock('../grpc/configuration_grpc_pb');

const MockClientClass = mocked(Services.ConfigurationClient);

const logger = buildLogger();

describe('ConfigurationHostClient', () => {
  let subject: ConfigurationClient;
  let mockGRPCClient: jest.Mocked<Services.ConfigurationClient>;
  let connInfo: ConnInfo.AsObject;
  let session: Session.AsObject;

  beforeEach(async () => {
    jest.resetAllMocks();
    subject = new ConfigurationClient();
    connInfo = defaultConnInfo;
    session = defaultSession;

    mockGRPCClient = createMockInstance(Services.ConfigurationClient);
    mockGRPCClient.waitForReady.mockImplementation(createWaitHandler());
    MockClientClass.mockImplementation(() => mockGRPCClient as any);

    await expect(
      subject.connect(connInfo, session, logger),
    ).resolves.toBeUndefined();
  });
  describe('#configurationDelete', () => {
    const configurationKey = 'key';
    beforeEach(async () => {
      mockGRPCClient.configurationDelete.mockImplementation(
        createCallbackHandler(),
      );

      await expect(subject.configurationDelete(configurationKey)).resolves.toBe(
        undefined,
      );
    });
    it('should call grpc client function', async () => {
      expect(mockGRPCClient.configurationDelete).toHaveBeenCalledWith(
        expect.any(Messages.ConfigurationDeleteRequest),
        expect.any(Function),
      );
    });
    it('should have configured the request with the right key', () => {
      const deleteRequest = captureMockArgument<Messages.ConfigurationDeleteRequest>(
        mockGRPCClient.configurationDelete,
      );
      expect(deleteRequest.getKey()).toBe(configurationKey);
    });
  });
  describe('#configurationExists', () => {
    const configurationKey = 'key';
    let mockResponse: Messages.ConfigurationExistsResponse;

    beforeEach(async () => {
      mockResponse = new Messages.ConfigurationExistsResponse().setExists(true);

      mockGRPCClient.configurationExists.mockImplementation(
        createCallbackHandler(mockResponse),
      );
    });
    it('should call grpc client function', async () => {
      await expect(subject.configurationExists(configurationKey)).resolves.toBe(
        true,
      );
      expect(mockGRPCClient.configurationExists).toHaveBeenCalledWith(
        expect.any(Messages.ConfigurationExistsRequest),
        expect.any(Function),
      );
      const existsRequest = captureMockArgument<Messages.ConfigurationExistsRequest>(
        mockGRPCClient.configurationExists,
      );
      expect(existsRequest.getKey()).toBe(configurationKey);
    });
  });
  describe('#configurationRead', () => {
    let mockResponse: Messages.ConfigurationReadResponse;
    const keyValue = 'value';
    const key = 'key';
    beforeEach(async () => {
      mockResponse = new Messages.ConfigurationReadResponse().setValue(
        keyValue,
      );

      mockGRPCClient.configurationRead.mockImplementation(
        createCallbackHandler(mockResponse),
      );
    });
    it('should call grpc client function', async () => {
      await expect(subject.configurationRead(key)).resolves.toEqual(keyValue);
      expect(mockGRPCClient.configurationRead).toHaveBeenCalledWith(
        expect.any(Messages.ConfigurationReadRequest),
        expect.any(Function),
      );
      const readRequest = captureMockArgument<Messages.ConfigurationReadRequest>(
        mockGRPCClient.configurationRead,
      );
      expect(readRequest.getKey()).toBe(key);
    });
  });
  describe('#configurationWrite', () => {
    const keyValue = 'value';
    const key = 'key';
    beforeEach(async () => {
      mockGRPCClient.configurationWrite.mockImplementation(
        createCallbackHandler(),
      );
      await subject.connect(connInfo, session, logger);
    });
    it('should call grpc client function', async () => {
      await expect(subject.configurationWrite(key, keyValue)).resolves.toEqual(
        undefined,
      );
      expect(mockGRPCClient.configurationWrite).toHaveBeenCalledWith(
        expect.any(Messages.ConfigurationWriteRequest),
        expect.any(Function),
      );
      const writeRequest = captureMockArgument<Messages.ConfigurationWriteRequest>(
        mockGRPCClient.configurationWrite,
      );
      expect(writeRequest.getKey()).toBe(key);
      expect(writeRequest.getValue()).toBe(keyValue);
    });
  });
});
