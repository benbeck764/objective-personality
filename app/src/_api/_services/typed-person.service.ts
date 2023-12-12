import {
  OPSTypedPersonExtended,
  mapOpsTypedPersonToOpsTypedPersonExtended,
  OpsTypedPersonSearchRequestDto,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import { HttpStatus } from './common/http-status';
import ServiceBase from './common/service-base';
import { ServiceResponse } from './common/service-response';
import { FunctionType, TemperamentType } from '@/_models/typed-person-helper';
import { Prisma } from '@prisma/client';

class TypedPersonService extends ServiceBase {
  private static classInstance: TypedPersonService;

  constructor() {
    super();
  }

  public async getTypedPerson(name: string): Promise<ServiceResponse<OPSTypedPersonExtended>> {
    try {
      const person = await this.prismaClient.oPSTypedPerson.findFirst({
        where: { Name: name },
        include: { Links: true },
      });
      if (!person) return { status: HttpStatus.NOT_FOUND };

      const dto = mapOpsTypedPersonToOpsTypedPersonExtended(person);
      return { status: HttpStatus.OK, data: dto };
    } catch (err: any) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: err.message,
      };
    }
  }

  public async searchTypedPeople(
    dto: OpsTypedPersonSearchRequestDto
  ): Promise<ServiceResponse<OpsTypedPersonSearchResponseDto>> {
    try {
      const currentPage = dto.pageNumber;
      const pageSize = dto.pageSize;
      const queryText = dto.filterText;

      const whereClause = this.buildSearchWhereClause(queryText);
      const entities = await this.prismaClient.oPSTypedPerson.findMany({
        where: whereClause,
        include: { Links: true },
      });

      const mappedDtos = entities.map(mapOpsTypedPersonToOpsTypedPersonExtended);

      let dtos = mappedDtos;
      if (typeof currentPage !== 'undefined' && pageSize) {
        dtos = mappedDtos.slice(
          currentPage * pageSize,
          Math.min(currentPage * pageSize + pageSize, mappedDtos.length)
        );
      }

      const result: OpsTypedPersonSearchResponseDto = {
        currentPageNumber: currentPage ?? 0,
        numberOfPages: Math.ceil(mappedDtos.length / (pageSize ?? mappedDtos.length)),
        pageSize: pageSize ?? mappedDtos.length,
        totalItems: mappedDtos.length,
        items: dtos,
      };

      return { status: HttpStatus.OK, data: result };
    } catch (err: any) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: err.message,
      };
    }
  }

  public buildSearchWhereClause(filter?: string): Prisma.OPSTypedPersonWhereInput | undefined {
    if (!filter) return;

    const searchTermWhereClause: Prisma.OPSTypedPersonWhereInput = { AND: [] };

    const filterText = filter.toLocaleLowerCase();
    const searchTerms = filterText
      .trim()
      .split(' ')
      .map((filterText: string) => filterText.toLocaleLowerCase());

    const DI_FUNCTIONS = [FunctionType.IntrovertedThinking, FunctionType.IntrovertedFeeling];
    const DE_FUNCTIONS = [FunctionType.ExtrovertedThinking, FunctionType.ExtovertedFeeling];
    const OE_FUNCTIONS = [FunctionType.ExtrovertedSensing, FunctionType.ExtrovertedIntuition];
    const OI_FUNCTIONS = [FunctionType.ExtrovertedSensing, FunctionType.ExtrovertedIntuition];
    const THINKING_FUNCTIONS = [FunctionType.ExtrovertedThinking, FunctionType.IntrovertedThinking];
    const FEELING_FUNCTIONS = [FunctionType.ExtovertedFeeling, FunctionType.IntrovertedFeeling];
    const INTUITION_FUNCTIONS = [
      FunctionType.ExtrovertedIntuition,
      FunctionType.IntrovertedIntuition,
    ];
    const SENSING_FUNCTIONS = [FunctionType.ExtrovertedSensing, FunctionType.IntrovertedSensing];
    const FUNCTIONS = [
      ...THINKING_FUNCTIONS,
      ...FEELING_FUNCTIONS,
      ...INTUITION_FUNCTIONS,
      ...SENSING_FUNCTIONS,
    ];

    searchTerms.forEach((searchTerm: string, index: number) => {
      let term: Prisma.OPSTypedPersonWhereInput = {};
      // Deciders & Observers
      if (searchTerm === 'decider') {
        term = { Temperament: { in: [TemperamentType.IxxP, TemperamentType.ExxJ] } };
      } else if (searchTerm === 'observer') {
        term = { Temperament: { in: [TemperamentType.IxxJ, TemperamentType.ExxP] } };
      } else if (searchTerm === 'ixxp' || searchTerm === 'ip') {
        term = { Temperament: { equals: TemperamentType.IxxP } };
      } else if (searchTerm === 'exxj' || searchTerm === 'ej') {
        term = { Temperament: { equals: TemperamentType.ExxJ } };
      } else if (searchTerm === 'ixxj' || searchTerm === 'ij') {
        term = { Temperament: { equals: TemperamentType.IxxJ } };
      } else if (searchTerm === 'exxp' || searchTerm === 'ep') {
        term = { Temperament: { equals: TemperamentType.ExxP } };
      } else if (['di', 'self'].includes(searchTerm)) {
        term = {
          OR: [{ FirstFunction: { in: DI_FUNCTIONS } }, { SecondFunction: { in: DI_FUNCTIONS } }],
        };
      } else if (['de', 'tribe'].includes(searchTerm)) {
        term = {
          OR: [{ FirstFunction: { in: DE_FUNCTIONS } }, { SecondFunction: { in: DE_FUNCTIONS } }],
        };
      } else if (['oe', 'gather', 'gathering', 'gatherer'].includes(searchTerm)) {
        term = {
          OR: [{ FirstFunction: { in: OE_FUNCTIONS } }, { SecondFunction: { in: OE_FUNCTIONS } }],
        };
      } else if (['oi', 'organize', 'organizing', 'organizer'].includes(searchTerm)) {
        term = {
          OR: [{ FirstFunction: { in: OI_FUNCTIONS } }, { SecondFunction: { in: OI_FUNCTIONS } }],
        };
      } else if (['think', 'thinking', 'thinker'].includes(searchTerm)) {
        term = {
          OR: [
            { FirstFunction: { in: THINKING_FUNCTIONS } },
            { SecondFunction: { in: THINKING_FUNCTIONS } },
          ],
        };
      } else if (['feel', 'feeling', 'feeler'].includes(searchTerm)) {
        term = {
          OR: [
            { FirstFunction: { in: FEELING_FUNCTIONS } },
            { SecondFunction: { in: FEELING_FUNCTIONS } },
          ],
        };
      } else if (['intuitive', 'intuition'].includes(searchTerm)) {
        term = {
          OR: [
            { FirstFunction: { in: INTUITION_FUNCTIONS } },
            { SecondFunction: { in: INTUITION_FUNCTIONS } },
          ],
        };
      } else if (['sensing', 'sensor'].includes(searchTerm)) {
        term = {
          OR: [
            { FirstFunction: { in: SENSING_FUNCTIONS } },
            { SecondFunction: { in: SENSING_FUNCTIONS } },
          ],
        };
        // Letters
      } else if (searchTerm === 'sf') {
        term = {
          OR: [
            {
              AND: [
                { FirstFunction: { in: SENSING_FUNCTIONS } },
                { SecondFunction: { in: FEELING_FUNCTIONS } },
              ],
            },
            {
              AND: [
                { FirstFunction: { in: FEELING_FUNCTIONS } },
                { SecondFunction: { in: SENSING_FUNCTIONS } },
              ],
            },
          ],
        };
      } else if (searchTerm === 'st') {
        term = {
          OR: [
            {
              AND: [
                { FirstFunction: { in: SENSING_FUNCTIONS } },
                { SecondFunction: { in: THINKING_FUNCTIONS } },
              ],
            },
            {
              AND: [
                { FirstFunction: { in: THINKING_FUNCTIONS } },
                { SecondFunction: { in: SENSING_FUNCTIONS } },
              ],
            },
          ],
        };
      } else if (searchTerm === 'nf') {
        term = {
          OR: [
            {
              AND: [
                { FirstFunction: { in: INTUITION_FUNCTIONS } },
                { SecondFunction: { in: FEELING_FUNCTIONS } },
              ],
            },
            {
              AND: [
                { FirstFunction: { in: FEELING_FUNCTIONS } },
                { SecondFunction: { in: INTUITION_FUNCTIONS } },
              ],
            },
          ],
        };
      } else if (searchTerm === 'nt') {
        term = {
          OR: [
            {
              AND: [
                { FirstFunction: { in: INTUITION_FUNCTIONS } },
                { SecondFunction: { in: THINKING_FUNCTIONS } },
              ],
            },
            {
              AND: [
                { FirstFunction: { in: THINKING_FUNCTIONS } },
                { SecondFunction: { in: INTUITION_FUNCTIONS } },
              ],
            },
          ],
        };
      } else if (
        FUNCTIONS.map((func: FunctionType) => func.toLocaleLowerCase()).includes(searchTerm)
      ) {
        term = { Type: { not: null, contains: searchTerm } };
      } else if (searchTerm === 'jumper') {
        term = { Jumper: { not: null, equals: true } };
      } else if (['glasslizard', 'glasssnake'].includes(searchTerm)) {
        term = { GlassLizard: { not: null, equals: true } };
        // Social Types
      } else if (searchTerm === 'socialtype') {
        term = { SocialType: { not: null } };
      } else if (
        [
          'socialtype1',
          'socialtype2',
          'socialtype3',
          'socialtype4',
          'social1',
          'social2',
          'social3',
          'social4',
        ].includes(searchTerm)
      ) {
        const socialTypeNumber = +searchTerm.replace('social', '').replace('type', '');
        term = { SocialTypeShort: { not: null, equals: socialTypeNumber } };
      } else {
        term = {
          OR: [
            // OPS Type Catch-All
            {
              OR: [
                { Type: { not: null, contains: searchTerm } },
                { TypeClean: { not: null, contains: searchTerm } },
              ],
            },
            // MBTI Type Catch-All
            { MBTITypeShort: { not: null, equals: searchTerm } },
            // Person's Name (should be last)
            { Name: { contains: searchTerm } },
          ],
        };
      }

      (searchTermWhereClause.AND as Prisma.OPSTypedPersonWhereInput[]).push(term);
    });

    return searchTermWhereClause;
  }

  static async getInstance(): Promise<TypedPersonService> {
    if (!this.classInstance) this.classInstance = new TypedPersonService();
    return this.classInstance;
  }
}

export default TypedPersonService;
