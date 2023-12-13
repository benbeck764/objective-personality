import { HomeVisualResponseDto } from '@/_models/visuals.models';
import ServiceBase from './common/service-base';
import { ServiceResponse } from './common/service-response';
import { mapOpsTypedPersonToOpsTypedPersonExtended } from '@/_models/ops-typed-people.models';
import { HttpStatus } from './common/http-status';
import { OPSTypedPerson } from '@prisma/client';

class VisualsService extends ServiceBase {
  private static classInstance: VisualsService;

  constructor() {
    super();
  }

  public async getHomeVisual(): Promise<ServiceResponse<HomeVisualResponseDto>> {
    try {
      const typedPeople = await this.prismaClient.oPSTypedPerson.findMany({
        where: { Type: { not: null } },
      });
      if (!typedPeople.length) return { status: HttpStatus.NOT_FOUND };

      const mappedPeople = typedPeople.map((p: OPSTypedPerson) =>
        mapOpsTypedPersonToOpsTypedPersonExtended({ ...p, Links: [] })
      );

      const dto: HomeVisualResponseDto = {
        people: mappedPeople,
      };

      return { status: HttpStatus.OK, data: dto };
    } catch (err: any) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: err.message,
      };
    }
  }

  static async getInstance(): Promise<VisualsService> {
    if (!this.classInstance) this.classInstance = new VisualsService();
    return this.classInstance;
  }
}

export default VisualsService;
