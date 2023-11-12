export const add = (a, b, isLowerThanFive) => {
    const result = a + b;
  
    if (result < 5) {
      isLowerThanFive(result);
    }
  
    return result;
  };
  