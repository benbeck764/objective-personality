import {
  BlobServiceClient,
  BlockBlobClient,
  BlockBlobUploadOptions,
  BlockBlobUploadResponse,
} from '@azure/storage-blob';

export type BlobUploadResponse = {
  storageAccountName: string;
  storageAccountUrl: string;
  containerName: string;
  fileName: string;
  url: string;
};

class BlobStorageClient {
  protected readonly blobClient: BlobServiceClient;

  constructor() {
    this.blobClient = BlobServiceClient.fromConnectionString(
      process.env.STORAGE_CONNECTION_STRING
    );
  }

  public async uploadFile(options: {
    file: Blob | Buffer | ArrayBuffer | ArrayBufferView;
    container: string;
    filename: string;
    blobOptions?: BlockBlobUploadOptions;
  }): Promise<BlobUploadResponse> {
    const { file, container, filename, blobOptions } = options;

    const containerClient = this.blobClient.getContainerClient(container);
    await containerClient.createIfNotExists();
    const blockBlobClient = containerClient.getBlockBlobClient(filename);

    const uploadResponse = await blockBlobClient.uploadData(file, blobOptions);
    return {
      storageAccountName: this.blobClient.accountName,
      storageAccountUrl: this.blobClient.url,
      containerName: containerClient.containerName,
      fileName: blockBlobClient.name,
      url: uploadResponse?._response?.request?.url,
    };
  }

  public async deleteBlobsByFilename(
    container: string,
    filenames: string[]
  ): Promise<void> {
    const containerClient = this.blobClient.getContainerClient(container);
    for (const filename of filenames) {
      try {
        await containerClient.deleteBlob(filename, {
          deleteSnapshots: 'include',
        });
      } catch {
        continue;
      }
    }
  }

  public async deleteBlobsByUrl(
    container: string,
    fileUrls: string[]
  ): Promise<void> {
    const containerClient = this.blobClient.getContainerClient(container);
    for (const fileUrl of fileUrls) {
      const fileName = fileUrl.replace(`${containerClient.url}/`, '');
      await containerClient.deleteBlob(fileName, {
        deleteSnapshots: 'include',
      });
    }
  }
}

export default BlobStorageClient;
