import {
  BlobServiceClient,
  BlockBlobClient,
  BlockBlobUploadOptions,
  BlockBlobUploadResponse,
} from '@azure/storage-blob';

class BlobStorageClient {
  protected readonly blobClient: BlobServiceClient;
  public readonly themeContainer: string;
  public readonly themeFolder: string;

  constructor() {
    this.blobClient = BlobServiceClient.fromConnectionString(
      process.env.STORAGE_CONNECTION_STRING
    );
  }

  public async uploadJsonBlob(
    json: string,
    filename: string,
    container: string
  ): Promise<BlockBlobUploadResponse> {
    const containerClient = this.blobClient.getContainerClient(container);
    const content = json;
    const uploadOptions: BlockBlobUploadOptions = {
      blobHTTPHeaders: { blobContentType: 'application/json' },
    };
    const blockBlobClient = containerClient.getBlockBlobClient(filename);
    const res = await blockBlobClient.upload(
      content,
      Buffer.byteLength(content),
      uploadOptions
    );
    return res;
  }

  public async getJsonBlobs(
    filenames: string[],
    container: string
  ): Promise<string[]> {
    const containerClient = this.blobClient.getContainerClient(container);
    const blockBlobClients = filenames.map((filename: string) =>
      containerClient.getBlockBlobClient(filename)
    );

    const downloaded = await Promise.all(
      blockBlobClients.map(async (blockBlobClient: BlockBlobClient) => {
        try {
          return await blockBlobClient.downloadToBuffer();
        } catch {
          return null;
        }
      })
    );

    const mapped = downloaded
      .filter((b: Buffer) => b)
      .map((b: Buffer) => b.toString());

    return mapped;
  }

  public async deleteBlob(filename: string, container: string): Promise<void> {
    const containerClient = this.blobClient.getContainerClient(container);
    const blockBlobClient = containerClient.getBlockBlobClient(filename);
    await blockBlobClient.delete();
  }
}

export default BlobStorageClient;
