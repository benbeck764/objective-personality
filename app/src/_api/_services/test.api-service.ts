import { HttpStatus } from './common/http-status';
import ServiceBase from './common/service-base';
import { ServiceResponse } from './common/service-response';

class TestApiService extends ServiceBase {
  private static classInstance: TestApiService;

  constructor() {
    super();
  }

  public async test(): Promise<ServiceResponse<unknown>> {
    try {
      return { status: HttpStatus.OK, data: { test1: process.env?.DATABASE_URL } };
    } catch (err: any) {
      console.log(err);
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: err.message,
      };
    }
  }

  static async getInstance(): Promise<TestApiService> {
    if (!this.classInstance) this.classInstance = new TestApiService();
    return this.classInstance;
  }
}

export default TestApiService;
