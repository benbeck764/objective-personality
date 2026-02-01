import { BlobServiceClient, BlockBlobUploadOptions } from '@azure/storage-blob';

export type BlobUploadResponse = {
  storageAccountName: string;
  storageAccountUrl: string;
  containerName: string;
  fileName: string;
  url: string;
};

let blobClient: BlobServiceClient | null = null;

const getBlobClient = (): BlobServiceClient | null => {
  if (blobClient) return blobClient;

  const connectionString = process.env.STORAGE_CONNECTION_STRING;
  if (!connectionString) return null;

  blobClient = BlobServiceClient.fromConnectionString(connectionString);
  return blobClient;
};

export const uploadFile = async (options: {
  file: Blob | Buffer | ArrayBuffer | ArrayBufferView;
  container: string;
  filename: string;
  blobOptions?: BlockBlobUploadOptions;
}): Promise<BlobUploadResponse> => {
  const client = getBlobClient();
  if (!client) {
    throw new Error('STORAGE_CONNECTION_STRING not configured');
  }

  const { file, container, filename, blobOptions } = options;

  const containerClient = client.getContainerClient(container);
  await containerClient.createIfNotExists();
  const blockBlobClient = containerClient.getBlockBlobClient(filename);

  const uploadResponse = await blockBlobClient.uploadData(file, blobOptions);
  return {
    storageAccountName: client.accountName,
    storageAccountUrl: client.url,
    containerName: containerClient.containerName,
    fileName: blockBlobClient.name,
    url: uploadResponse?._response?.request?.url,
  };
};

export const deleteBlobsByFilename = async (
  container: string,
  filenames: string[]
): Promise<void> => {
  const client = getBlobClient();
  if (!client) {
    throw new Error('STORAGE_CONNECTION_STRING not configured');
  }

  const containerClient = client.getContainerClient(container);
  for (const filename of filenames) {
    try {
      await containerClient.deleteBlob(filename, {
        deleteSnapshots: 'include',
      });
    } catch {
      continue;
    }
  }
};

export const deleteBlobsByUrl = async (
  container: string,
  fileUrls: string[]
): Promise<void> => {
  const client = getBlobClient();
  if (!client) {
    throw new Error('STORAGE_CONNECTION_STRING not configured');
  }

  const containerClient = client.getContainerClient(container);
  for (const fileUrl of fileUrls) {
    const fileName = fileUrl.replace(`${containerClient.url}/`, '');
    await containerClient.deleteBlob(fileName, {
      deleteSnapshots: 'include',
    });
  }
};
