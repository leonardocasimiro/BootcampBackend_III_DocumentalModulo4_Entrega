import {db} from '#core/servers/index.js';
import { HouseRepository } from "./house.repository.js";
import { House } from "../house.model.js";

export const dbRepository: HouseRepository = {
  
  getHouseList: async (page?: number, pageSize?: number) => {
    return db.collection<House>("houses").find().toArray();
  },

  getHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
  saveHouse: async (house: House) => {
    throw new Error("Not implemented");
  },
  deleteHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
};
