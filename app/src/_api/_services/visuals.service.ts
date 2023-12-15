import {
  OPSTypedPersonExtended,
  mapOpsTypedPersonToOpsTypedPersonExtended,
} from '@/_models/ops-typed-people.models';
import { FunctionType } from '@/_models/typed-person-helper';
import { HomeVisualResponseDto } from '@/_models/visuals.models';
import { OPSTypedPerson } from '@prisma/client';
import { HttpStatus } from './common/http-status';
import ServiceBase from './common/service-base';
import { ServiceResponse } from './common/service-response';

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

      const people = typedPeople.map((p: OPSTypedPerson) =>
        mapOpsTypedPersonToOpsTypedPersonExtended({ ...p, Links: [] })
      );

      const siPeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.IntrovertedSensing].includes(p.FirstFunction)
      );
      const niPeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.IntrovertedIntuition].includes(p.FirstFunction)
      );
      const oiPeople = siPeople.concat(niPeople);

      const sePeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.ExtrovertedSensing].includes(p.FirstFunction)
      );
      const nePeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.ExtrovertedIntuition].includes(p.FirstFunction)
      );
      const oePeople = sePeople.concat(nePeople);

      const tiPeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.IntrovertedThinking].includes(p.FirstFunction)
      );
      const fiPeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.IntrovertedFeeling].includes(p.FirstFunction)
      );
      const diPeople = tiPeople.concat(fiPeople);

      const tePeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.ExtrovertedThinking].includes(p.FirstFunction)
      );
      const fePeople = people.filter((p: OPSTypedPersonExtended) =>
        [FunctionType.ExtovertedFeeling].includes(p.FirstFunction)
      );
      const dePeople = tePeople.concat(fePeople);

      const data = {
        name: 'people',
        children: [
          {
            name: 'Oi',
            children: [
              {
                name: FunctionType.IntrovertedSensing,
                children: siPeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: siPeople.length };
                }),
                value: siPeople.length,
              },
              {
                name: FunctionType.IntrovertedIntuition,
                children: niPeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: niPeople.length };
                }),
                value: niPeople.length,
              },
            ],
            value: oiPeople.length,
          },
          {
            name: 'Oe',
            children: [
              {
                name: FunctionType.ExtrovertedSensing,
                children: sePeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: sePeople.length };
                }),
                value: sePeople.length,
              },
              {
                name: FunctionType.ExtrovertedIntuition,
                children: nePeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: nePeople.length };
                }),
                value: nePeople.length,
              },
            ],
            value: oePeople.length,
          },
          {
            name: 'Di',
            children: [
              {
                name: FunctionType.IntrovertedThinking,
                children: tiPeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: tiPeople.length };
                }),
                value: tiPeople.length,
              },
              {
                name: FunctionType.IntrovertedFeeling,
                children: fiPeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: fiPeople.length };
                }),
                value: fiPeople.length,
              },
            ],
            value: diPeople.length,
          },
          {
            name: 'De',
            children: [
              {
                name: FunctionType.ExtrovertedThinking,
                children: tePeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: tePeople.length };
                }),
                value: tePeople.length,
              },
              {
                name: FunctionType.ExtovertedFeeling,
                children: fePeople.map((p: OPSTypedPersonExtended) => {
                  return { name: p.Name, children: [], value: fePeople.length };
                }),
                value: fePeople.length,
              },
            ],
            value: dePeople.length,
          },
        ],
      };

      const dto: HomeVisualResponseDto = { data };

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
