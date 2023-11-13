// contrato del modelo de house en DALS
import * as model from "#dals/index.js";
// contrato de house en la api o para retornar a la web
import * as apiModel from "./house.api-model.js";
import {ObjectId} from "mongodb";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
    id: house._id.toHexString(),
    name: house.name,
    description: house.description,
    address: {
        street: house.address.street,
        country: house.address.country,
        country_code: house.address.country_code,
    },
    bedrooms: house.bedrooms,
    beds: house.beds,
    reviews: house.reviews.map(review => ({
        _id: review._id,
        comments: review.comments,
        date: review.date,
    })),
  });
  
  export const maphouseListFromModelToApi = (
    houseList: model.House[]
  ): apiModel.House[] => houseList.map(mapHouseFromModelToApi);
  
  export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
    _id: new ObjectId(house.id),
    name: house.name,
    description: house.description,
    address: {
        street: house.address.street,
        country: house.address.country,
        country_code: house.address.country_code,
    },
    bedrooms: house.bedrooms,
    beds: house.beds,
    reviews: house.reviews.map(review => ({
        _id: review._id,
        comments: review.comments,
        date: new Date(),
    })),
  });
  
  export const mapHouseListFromApiToModel = (houseList: apiModel.House[]): model.House[] => []
  
