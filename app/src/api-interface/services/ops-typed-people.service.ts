import ApiService from '../common/api-service';
import { endpoints } from '../common/endpoints';
import { ServiceResult } from '../models/api-shared.models';
import { OPSTypedPerson } from '../models/ops-typed-people.models';

class OpsTypedPeopleService extends ApiService {
  private static classInstance: OpsTypedPeopleService;

  public searchOPSTypedPeople(): ServiceResult<OPSTypedPerson[]> {
    return this.post(`${this.baseUrl}/${endpoints.opsTypedPeople.search}`);
  }

  static getInstance(): OpsTypedPeopleService {
    if (!this.classInstance) {
      this.classInstance = new OpsTypedPeopleService();
    }
    return this.classInstance;
  }
}

export default OpsTypedPeopleService;
