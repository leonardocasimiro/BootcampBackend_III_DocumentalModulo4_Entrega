import * as calculator from './calculator.js';

describe('Calculator specs', () => {
  describe('add', () => {
    it('should return 4 when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      const isLowerThanFive = () => {};

      // Act
      const result = calculator.add(a, b, isLowerThanFive);

      // Assert
      expect(result).toEqual(4);
    });

    it('should call to isLowerThanFive when passing A equals 2 and B equals 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      const isLowerThanFive = () => {};

      // Act
      const result = calculator.add(a, b, isLowerThanFive);

      // Assert
      expect(result).toEqual(4);
    });
  });
});
