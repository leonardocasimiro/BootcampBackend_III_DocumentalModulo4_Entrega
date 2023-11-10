import { Router } from "express";
import { houseRepository } from "#dals/index.js";
import  {maphouseListFromModelToApi, mapHouseFromModelToApi, mapHouseFromApiToModel} from "./house.mappers.js";
import { getHouse, insertHouse, updateHouse, deleteHouse } from "../../mock-db-houses.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      let houseList = await houseRepository.getHouseList();

      if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, houseList.length);
        houseList = houseList.slice(startIndex, endIndex);
      }

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
  .post("/", async (req, res) => {
    const house = req.body;
    const newHouse = await houseRepository.saveHouse(mapHouseFromApiToModel(house));
    res.status(201).send(newHouse);
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const houseId = Number(id);
    const house = req.body;
    await updateHouse(houseId, house);
    res.sendStatus(204);
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    const houseId = Number(id);
    await deleteHouse(houseId);
    res.sendStatus(204);
  });
