import ApiService from '../common/api-service';
import { endpoints } from '../common/endpoints';
import { ServiceResult } from '../common/api-shared.models';
import {
  OPSTypedPerson,
  OpsTypedPersonSearchRequestDto,
} from '../../_models/ops-typed-people.models';

class OpsTypedPeopleService extends ApiService {
  private static classInstance: OpsTypedPeopleService;

  public searchOPSTypedPeople(
    dto: OpsTypedPersonSearchRequestDto
  ): ServiceResult<OPSTypedPerson[]> {
    return this.post(`${this.baseUrl}/${endpoints.opsTypedPeople.search}`, dto);
  }

  static getInstance(): OpsTypedPeopleService {
    if (!this.classInstance) {
      this.classInstance = new OpsTypedPeopleService();
    }
    return this.classInstance;
  }
}

export default OpsTypedPeopleService;
