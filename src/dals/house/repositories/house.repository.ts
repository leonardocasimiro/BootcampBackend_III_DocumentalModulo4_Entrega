import { House } from "../house.model.js";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?:number) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  saveHouse: (house: House) => Promise<House>;
  insertCommentInHouse: (house: House, comment: string) => Promise<House>;
  deleteHouse: (id: string) => Promise<boolean>;
}
