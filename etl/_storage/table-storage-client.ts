import {
  GetTableEntityResponse,
  TableClient,
  TableEntity,
  TableEntityResult,
  TableInsertEntityHeaders,
  TableMergeEntityHeaders,
  TableUpdateEntityHeaders,
  UpdateMode,
} from '@azure/data-tables';

class TableStorageClient<T extends object = Record<string, unknown>> {
  protected readonly tableClient: TableClient;

  constructor(tableName: string) {
    this.tableClient = TableClient.fromConnectionString(
      process.env.STORAGE_CONNECTION_STRING,
      tableName
    );
  }

  public async getEntity(
    partitionKey: string,
    rowKey: string
  ): Promise<GetTableEntityResponse<TableEntityResult<T>>> {
    try {
      const result = await this.tableClient.getEntity<T>(partitionKey, rowKey);
      return result;
    } catch {
      return null;
    }
  }

  public async deleteEntity(
    partitionKey: string,
    rowKey: string
  ): Promise<void> {
    await this.tableClient.deleteEntity(partitionKey, rowKey);
  }

  public async createEntity(
    row: TableEntity<T>
  ): Promise<TableInsertEntityHeaders> {
    const response = await this.tableClient.createEntity<T>(row);
    return response;
  }

  public async upsertEntity(
    row: TableEntity<T>
  ): Promise<TableMergeEntityHeaders> {
    const response = await this.tableClient.upsertEntity<T>(row);
    return response;
  }

  public async updateEntity(
    row: TableEntity<T>,
    mode?: UpdateMode
  ): Promise<TableUpdateEntityHeaders> {
    const response = await this.tableClient.updateEntity<T>(row, mode);
    return response;
  }
}

export default TableStorageClient;
