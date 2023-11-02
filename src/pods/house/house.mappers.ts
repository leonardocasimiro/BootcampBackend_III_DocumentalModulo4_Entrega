// contrato del modelo de house en DALS
import * as model from "#dals/index.js";
// contrato de house en la api o para retornar a la web
import * as apiModel from "./house.api-model.js";

const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
    id: house.id,
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
    })),
  });
  
  export const maphouseListFromModelToApi = (
    houseList: model.House[]
  ): apiModel.House[] => houseList.map(mapHouseFromModelToApi);
  
  