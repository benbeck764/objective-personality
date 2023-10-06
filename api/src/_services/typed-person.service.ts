import { TableEntityResult } from '@azure/data-tables';
import {
  OPSTypedPerson,
  OPSTypedPersonTableRow,
  mapOpsTypedPersonTableRowToOpsTypedPerson,
} from '../_models/OPSTypedPerson';
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

  public async searchTypedPeople(): Promise<
    ServiceResponse<OPSTypedPerson[] | null>
  > {
    try {
      const entities = await this.tableService.getEntities();
      const dtos = entities.map(
        (entity: TableEntityResult<OPSTypedPersonTableRow>) =>
          mapOpsTypedPersonTableRowToOpsTypedPerson(entity)
      );

      return { status: HttpStatus.OK, data: dtos.slice(0, 100) };
    } catch (err: any) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: err.message,
      };
    }
  }

  static async getInstance(): Promise<TypedPersonService> {
    const tableName = process.env.STORAGE_OPS_TYPED_PEOPLE_TABLE;
    const tableService = new TableStorageClient<OPSTypedPersonTableRow>(
      tableName
    );
    return new TypedPersonService(tableService);
  }
}

export default TypedPersonService;
