import ICredential from "../interfaces/ICredential";

let credentials: Array<ICredential> = [];
let id: number = 1;

export const createCredentialsService = async (
  username: string,
  password: string,
): Promise<number> => {
  const newCredential = {
    id: id++,
    username: username,
    password: password,
  };
  credentials.push(newCredential);
  return newCredential.id;
};

export const validateCredentialsService = async (
  username: string,
  password: string,
): Promise<number | undefined> => {
  const credentialsFound = credentials.find((cred) => cred.username === username);
  if (credentialsFound && credentialsFound.password === password) {
    return credentialsFound.id;
  }
  return undefined;
};
