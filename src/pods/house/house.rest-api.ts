import { Router } from "express";
import { houseRepository } from "#dals/index.js";
import  {maphouseListFromModelToApi, mapHouseFromModelToApi, mapHouseFromApiToModel} from "./house.mappers.js";
//import { deleteHouse } from "../../mock-db-houses.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const houseList = await houseRepository.getHouseList(page, pageSize);
      res.send(maphouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouse(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const house = req.body;
      const newHouse = await houseRepository.saveHouse(mapHouseFromApiToModel(house));
      res.status(201).send(mapHouseFromModelToApi(newHouse));
    } catch (error) {
      next(error);
    }
  })
  .put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const houseId = Number(id);
      const house = mapHouseFromApiToModel({...req.body, _id: id}); //HAcemos un "destructuring" del req.body en house, pero el campo id le meto el que viene en la URL, no el que viene en el body
      await houseRepository.saveHouse(house);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      await houseRepository.deleteHouse(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });
