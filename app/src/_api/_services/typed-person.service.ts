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

class TypedPersonService extends ServiceBase {
  constructor(
    private readonly tableService: TableStorageClient<OPSTypedPersonTableRow>
  ) {
    super();
  }

  public async searchTypedPeople(
    dto: OpsTypedPersonSearchRequestDto
  ): Promise<ServiceResponse<OpsTypedPersonSearchResponseDto>> {
    try {
      const currentPage = dto.pageNumber ?? 0;
      const pageSize = dto.pageSize ?? 25;
      const queryText = dto.filterText;

      const entities = await this.tableService.getEntities();

      const filteredDtos = entities
        .map((entity: TableEntityResult<OPSTypedPersonTableRow>) =>
          mapOpsTypedPersonTableRowToOpsTypedPerson(entity)
        )
        .filter((val: OPSTypedPerson) => {
          if (queryText) {
            return val.Name.toLocaleLowerCase().includes(
              queryText.toLocaleLowerCase()
            );
          } else {
            return val;
          }
        });

      const dtos = filteredDtos.slice(
        currentPage * pageSize,
        Math.min(currentPage * pageSize + pageSize, filteredDtos.length)
      );

      const result: OpsTypedPersonSearchResponseDto = {
        currentPageNumber: currentPage,
        numberOfPages: Math.ceil(filteredDtos.length / pageSize),
        pageSize: pageSize,
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

  static async getInstance(): Promise<TypedPersonService> {
    const tableName = process.env.STORAGE_OPS_TYPED_PEOPLE_TABLE ?? '';
    const tableService = new TableStorageClient<OPSTypedPersonTableRow>(
      tableName
    );
    return new TypedPersonService(tableService);
  }
}

export default TypedPersonService;
