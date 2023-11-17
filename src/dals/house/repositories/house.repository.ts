import { ObjectId } from "mongodb";
import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?:number) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  saveHouse: (house: House) => Promise<House>;
  insertCommentInHouse: (review: Review, id: ObjectId) => Promise<boolean>;
  deleteHouse: (id: string) => Promise<boolean>;
}
