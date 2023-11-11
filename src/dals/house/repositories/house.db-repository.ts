import {db} from '#core/servers/index.js';
import { HouseRepository } from "./house.repository.js";
import { House } from "../house.model.js";
import {ObjectId} from "mongodb";

export const dbRepository: HouseRepository = {
  
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = (pageSize !== null && pageSize !== undefined && pageSize >= 0) ? pageSize : 0;
    return await db.collection<House>("houses").find()
    .skip(skip)
    .limit(limit)
    .toArray();
  },

  getHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
  saveHouse: async (house: House) => {
    const { insertedId} = await db.collection('houses').insertOne(house);
    return {
      ...house,
      _id: insertedId
    }

  },
  deleteHouse: async (id: string) => {
    const { deletedCount } = await db?.collection('houses').deleteOne({_id: new ObjectId(id),});
    return deletedCount === 1;
  },
};
