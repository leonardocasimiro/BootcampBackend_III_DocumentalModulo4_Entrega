import { HouseRepository } from "./house.repository.js";
import { House } from "../house.model.js";
import { db_house } from "../../mock-data-house.js";

const insertHouse = (house: House) => {
  const id = (db_house.houses.length + 1).toString();
  const newHouse: House = {
    ...house,
    id,
  };

  db_house.houses = [...db_house.houses, newHouse];
  return newHouse;
};

const updateHouse = (house: House) => {
  db_house.houses = db_house.houses.map((b) => (b.id === house.id ? { ...b, ...house } : b));
  return house;
};

export const mockRepositoryHouse: HouseRepository = {
  getHouseList: async () => db_house.houses,
  getHouse: async (id: string) => db_house.houses.find((b) => b.id === id),
  saveHouse: async (house: House) =>
    Boolean(house.id) ? updateHouse(house) : insertHouse(house),
  deleteHouse: async (id: string) => {
    db_house.houses = db_house.houses.filter((b) => b.id !== id);
    return true;
  },
};
