import { TableEntityResult } from '@azure/data-tables';
import {
  OPSTypedPersonTableRow,
  OPSTypedPerson,
  mapOpsTypedPersonTableRowToOpsTypedPerson,
  OpsTypedPersonSearchRequestDto,
  nameof,
  OpsTypedPersonSearchResponseDto,
} from '@/_models/ops-typed-people.models';
import TableStorageClient from '../_storage/table-storage-client';
import { HttpStatus } from './common/http-status';
import ServiceBase from './common/service-base';
import { ServiceResponse } from './common/service-response';
import { FunctionType, TemperamentType } from '@/_models/typed-person-helper';

class TypedPersonService extends ServiceBase {
  constructor(private readonly tableService: TableStorageClient<OPSTypedPersonTableRow>) {
    super();
  }

  public async getTypedPerson(name: string): Promise<ServiceResponse<OPSTypedPerson>> {
    try {
      const entities = await this.tableService.getEntities({
        queryOptions: {
          filter: `${nameof<OPSTypedPerson>('Name')} eq '${name}'`,
        },
      });

      const entity = entities?.[0];
      if (!entity) return { status: HttpStatus.NOT_FOUND };

      const dto = mapOpsTypedPersonTableRowToOpsTypedPerson(entity);
      return { status: HttpStatus.OK, data: dto };
    } catch (err: any) {
      console.log(err);
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

      const entities = await this.tableService.getEntities();

      const filteredDtos = entities
        .map((entity: TableEntityResult<OPSTypedPersonTableRow>) =>
          mapOpsTypedPersonTableRowToOpsTypedPerson(entity)
        )
        .filter((val: OPSTypedPerson) => {
          return this.filterTypedPerson(val, queryText);
        });

      let dtos = filteredDtos;
      if (typeof currentPage !== 'undefined' && pageSize) {
        dtos = filteredDtos.slice(
          currentPage * pageSize,
          Math.min(currentPage * pageSize + pageSize, filteredDtos.length)
        );
      }

      const result: OpsTypedPersonSearchResponseDto = {
        currentPageNumber: currentPage ?? 0,
        numberOfPages: Math.ceil(filteredDtos.length / (pageSize ?? filteredDtos.length)),
        pageSize: pageSize ?? filteredDtos.length,
        totalItems: filteredDtos.length,
        items: dtos,
        databaseTotal: entities.length,
      };

      return { status: HttpStatus.OK, data: result };
    } catch (err: any) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: err.message,
      };
    }
  }

  public filterTypedPerson(person: OPSTypedPerson, filter?: string): boolean {
    if (!filter) return true;

    const filterText = filter.toLocaleLowerCase();
    const searchTerms = filterText
      .trim()
      .split(' ')
      .map((filterText: string) => filterText.toLocaleLowerCase());

    const searchTermsFound = Array.from(searchTerms).map(() => false);

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
      // Deciders & Observers
      if (searchTerm === 'decider') {
        searchTermsFound[index] =
          person.Temperament === TemperamentType.IxxP ||
          person.Temperament === TemperamentType.ExxJ;
      } else if (searchTerm === 'observer') {
        searchTermsFound[index] =
          person.Temperament === TemperamentType.IxxJ ||
          person.Temperament === TemperamentType.ExxP;
      } else if (searchTerm === 'ixxp' || searchTerm === 'ip') {
        searchTermsFound[index] = person.Temperament === TemperamentType.IxxP;
      } else if (searchTerm === 'exxj' || searchTerm === 'ej') {
        searchTermsFound[index] = person.Temperament === TemperamentType.ExxJ;
      } else if (searchTerm === 'ixxj' || searchTerm === 'ij') {
        searchTermsFound[index] = person.Temperament === TemperamentType.IxxJ;
      } else if (searchTerm === 'exxp' || searchTerm === 'ep') {
        searchTermsFound[index] = person.Temperament === TemperamentType.ExxP;
      } else if (['di', 'self'].includes(searchTerm)) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) =>
            [FunctionType.IntrovertedThinking, FunctionType.IntrovertedFeeling].includes(func)
        );
      } else if (['de', 'tribe'].includes(searchTerm)) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) =>
            [FunctionType.ExtrovertedThinking, FunctionType.ExtovertedFeeling].includes(func)
        );
      } else if (['oe', 'gather', 'gathering', 'gatherer'].includes(searchTerm)) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) =>
            [FunctionType.ExtrovertedSensing, FunctionType.ExtrovertedIntuition].includes(func)
        );
      } else if (['oi', 'organize', 'organizing', 'organizer'].includes(searchTerm)) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) =>
            [FunctionType.ExtrovertedSensing, FunctionType.ExtrovertedIntuition].includes(func)
        );
      } else if (searchTerm.includes('think') || searchTerm.includes('thinker')) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) => THINKING_FUNCTIONS.includes(func)
        );
      } else if (searchTerm.includes('feel') || searchTerm.includes('feeler')) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) => FEELING_FUNCTIONS.includes(func)
        );
      } else if (searchTerm.includes('intuitive') || searchTerm.includes('intuition')) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) => INTUITION_FUNCTIONS.includes(func)
        );
      } else if (searchTerm.includes('sensing') || searchTerm.includes('sensor')) {
        searchTermsFound[index] = [person.FirstFunction, person.SecondFunction].some(
          (func: FunctionType) => SENSING_FUNCTIONS.includes(func)
        );
        // Letters
      } else if (searchTerm === 'sf') {
        searchTermsFound[index] =
          (SENSING_FUNCTIONS.includes(person.FirstFunction) &&
            FEELING_FUNCTIONS.includes(person.SecondFunction)) ||
          (FEELING_FUNCTIONS.includes(person.FirstFunction) &&
            SENSING_FUNCTIONS.includes(person.SecondFunction));
      } else if (searchTerm === 'st') {
        searchTermsFound[index] =
          (SENSING_FUNCTIONS.includes(person.FirstFunction) &&
            THINKING_FUNCTIONS.includes(person.SecondFunction)) ||
          (THINKING_FUNCTIONS.includes(person.FirstFunction) &&
            SENSING_FUNCTIONS.includes(person.SecondFunction));
      } else if (searchTerm === 'nf') {
        searchTermsFound[index] =
          (INTUITION_FUNCTIONS.includes(person.FirstFunction) &&
            FEELING_FUNCTIONS.includes(person.SecondFunction)) ||
          (FEELING_FUNCTIONS.includes(person.FirstFunction) &&
            INTUITION_FUNCTIONS.includes(person.SecondFunction));
      } else if (searchTerm === 'nt') {
        searchTermsFound[index] =
          (INTUITION_FUNCTIONS.includes(person.FirstFunction) &&
            THINKING_FUNCTIONS.includes(person.SecondFunction)) ||
          (THINKING_FUNCTIONS.includes(person.FirstFunction) &&
            INTUITION_FUNCTIONS.includes(person.SecondFunction));
      } else if (
        FUNCTIONS.map((func: FunctionType) => func.toLocaleLowerCase()).includes(searchTerm)
      ) {
        searchTermsFound[index] = person.Type.toLocaleLowerCase().includes(searchTerm);
      } else if (searchTerm === 'jumper') {
        searchTermsFound[index] = person.Jumper;
      } else if (searchTerm === 'glasslizard' || searchTerm === 'glasssnake') {
        searchTermsFound[index] = person.GlassLizard;
      }
      //Catch all for OPS Type
      else if (
        person.Type.toLocaleLowerCase().includes(searchTerm) ||
        person.Type.replaceAll('/', '')
          .replace('(', '')
          .replace(')', '')
          .toLocaleLowerCase()
          .includes(searchTerm)
      ) {
        searchTermsFound[index] = true;
      }
      // Catch all for MBTI Type
      else if (person.MBTIType.slice(0, 4).toLocaleLowerCase().includes(searchTerm)) {
        searchTermsFound[index] = true;
      }
      // Name (should be last)
      else if (person.Name.toLocaleLowerCase().includes(searchTerm)) {
        searchTermsFound[index] = true;
      }
    });

    return searchTermsFound.every((val) => val === true);
  }

  static async getInstance(): Promise<TypedPersonService> {
    const tableName = process.env.STORAGE_OPS_TYPED_PEOPLE_TABLE ?? '';
    const tableService = new TableStorageClient<OPSTypedPersonTableRow>(tableName);
    return new TypedPersonService(tableService);
  }
}

export default TypedPersonService;
