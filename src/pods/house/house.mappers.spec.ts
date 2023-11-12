import * as model from '#dals/index.js';
import * as apiModel from './house.api-model.js';
import {mapHouseListFromApiToModel} from './house.mappers.js';

describe('house.mappers spec', () => {
  describe('mapHouseListFromApiToModel', () => {
    it('should return empty array when it feeds houseList equals undefined', () => {
      // Arrange
      const houseList: apiModel.House[] = undefined;

      // Act
      const result = mapHouseListFromApiToModel(houseList);
      

      // Assert
      const expectedResult: model.House[] = [];
      expect(result).toEqual(expectedResult);
    });
  });
});
