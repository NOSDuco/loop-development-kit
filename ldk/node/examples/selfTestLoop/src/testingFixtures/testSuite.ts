import { LoopTest } from './loopTest';
import { Logger } from '../../../../dist/logging';
import { HostServices } from '../../../../dist';

export default class TestSuite {
  private tests: LoopTest[];

  private logger: Logger;

  constructor(tests: LoopTest[], logger: Logger) {
    this.tests = tests;
    this.logger = logger;
  }

  public async start(host: HostServices): Promise<void> {
    for await (const test of this.tests) {
      test.runTest(host, this.logger);
    }
    return new Promise((resolve) => {
      resolve();
    });
  }
}
