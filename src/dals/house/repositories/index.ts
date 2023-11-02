import { mockRepositoryHouse } from "./house.mock-repository.js";
import { dbRepository } from "./house.db-repository.js";
import { envConstants } from "#core/constants/index.js";

export const houseRepository = envConstants.isApiMock
  ? mockRepositoryHouse
  : dbRepository;
