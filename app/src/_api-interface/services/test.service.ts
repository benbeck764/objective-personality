import ApiService from '../common/api-service';
import { endpoints } from '../common/endpoints';
import { ServiceResult } from '../common/api-shared.models';

class TestService extends ApiService {
  private static classInstance: TestService;

  public test(): ServiceResult<{ test1: string }> {
    return this.get(`${this.baseUrl}/${endpoints.test}`);
  }

  static getInstance(): TestService {
    if (!this.classInstance) {
      this.classInstance = new TestService();
    }
    return this.classInstance;
  }
}

export default TestService;
