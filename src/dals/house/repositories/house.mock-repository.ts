import {ObjectId} from "mongodb";
import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db_house } from "../../mock-data-house.js";

const insertHouse = (house: House) => {
  const id = new ObjectId();
  const newHouse: House = {
    ...house,
    _id: id,
  };

  db_house.houses = [...db_house.houses, newHouse];
  return newHouse;
};

const updateHouse = (house: House) => {
  db_house.houses = db_house.houses.map((b) => (b._id.toHexString() === house._id.toHexString() ? { ...b, ...house } : b));
  return house;
};

const paginateHouseList = (houseList: House[], page: number, pageSize:number) : House[] =>{
  let paginatedHouseList = [...houseList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};

export const mockRepositoryHouse: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => 
    paginateHouseList(db_house.houses, page, pageSize),
  getHouse: async (id: string) => db_house.houses.find((b) => b._id.toHexString() === id ),
  saveHouse: async (house: House) =>
    Boolean(house._id) ? updateHouse(house) : insertHouse(house),
  insertCommentInHouse: async (reviewIn: Review, idIn: ObjectId) => {
      return true;},
  deleteHouse: async (id: string) => {
    db_house.houses = db_house.houses.filter((b) => b._id.toHexString() !== id);
    return true;
  },
};
