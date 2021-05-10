import { storage } from '../services/Firebase';

export interface UploadFileRequest {
  path: string;
  file: File;
}

export const uploadFileAndReturnURL = async (
  path: string,
  file: File,
): Promise<any> => {
  const fileRef = storage.ref(path);
  await fileRef.put(file);
  const fileRefPath: string = await fileRef.getDownloadURL();
  return fileRefPath;
};
