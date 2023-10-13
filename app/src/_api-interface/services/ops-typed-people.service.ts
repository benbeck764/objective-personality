import ApiService from '../common/api-service';
import { endpoints } from '../common/endpoints';
import { ServiceResult } from '../common/api-shared.models';
import {
  OPSTypedPerson,
  OpsTypedPersonSearchRequestDto,
  OpsTypedPersonSearchResponseDto,
} from '../../_models/ops-typed-people.models';

class OpsTypedPeopleService extends ApiService {
  private static classInstance: OpsTypedPeopleService;

  public getTypedPerson(name: string): ServiceResult<OPSTypedPerson> {
    return this.get(`${this.baseUrl}/${endpoints.opsTypedPeople}`, { name });
  }

  public searchOPSTypedPeople(
    dto: OpsTypedPersonSearchRequestDto
  ): ServiceResult<OpsTypedPersonSearchResponseDto> {
    return this.post(`${this.baseUrl}/${endpoints.opsTypedPeople}`, dto);
  }

  static getInstance(): OpsTypedPeopleService {
    if (!this.classInstance) {
      this.classInstance = new OpsTypedPeopleService();
    }
    return this.classInstance;
  }
}

export default OpsTypedPeopleService;
