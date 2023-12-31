import BlobStorageClient from '../../_storage/blob-storage-client';
import { PrismaClient } from '@prisma/client';

abstract class ServiceBase {
  protected readonly blobStorageClient: BlobStorageClient;
  protected readonly prismaClient: PrismaClient;

  protected constructor() {
    this.blobStorageClient = new BlobStorageClient();
    this.prismaClient = new PrismaClient();
  }
}

export default ServiceBase;
