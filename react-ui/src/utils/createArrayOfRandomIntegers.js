import shuffleArray from './shuffleArray';

// Creates a array of randomIntegers from 0 to max
const createArrayOfRandomIntegers = max => {
  const orderedIntegers = [];
  for (let i = 0; i <= max; i++) {
    orderedIntegers.push(i);
  }
  return shuffleArray(orderedIntegers);
};

export default createArrayOfRandomIntegers;
