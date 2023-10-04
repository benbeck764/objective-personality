import BlobStorageClient from '../../_storage/blob-storage-client';

abstract class ServiceBase {
  protected readonly blobStorageClient: BlobStorageClient;

  protected constructor() {
    this.blobStorageClient = new BlobStorageClient();
  }
}

export default ServiceBase;
