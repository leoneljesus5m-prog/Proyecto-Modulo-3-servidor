import { Credential } from "../entities/Credential";
import { AppDataSource } from "../config/dataSource"; 

const credentialRepository = AppDataSource.getRepository(Credential);

export const createCredentialsService = async (
  username: string,
  password: string,
): Promise<Credential> => {
  const newCredential = credentialRepository.create({ username, password });
  await credentialRepository.save(newCredential);
  return newCredential;
};

export const validateCredentialsService = async (username: string, password: string,): Promise<number | undefined> => {
  const credentialsFound = await credentialRepository.findOneBy({username, password});
  return credentialsFound ? credentialsFound.id : undefined;
};
