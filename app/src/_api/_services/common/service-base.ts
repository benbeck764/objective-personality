import BlobStorageClient from '../../_storage/blob-storage-client';
import { PrismaClient } from 'objective-personality-data/client';

abstract class ServiceBase {
  protected readonly blobStorageClient: BlobStorageClient | null;
  protected readonly prismaClient: PrismaClient;

  protected constructor() {
    // Only initialize BlobStorageClient if connection string is available
    try {
      this.blobStorageClient = new BlobStorageClient();
    } catch {
      this.blobStorageClient = null;
    }
    this.prismaClient = new PrismaClient();
  }
}

export default ServiceBase;
