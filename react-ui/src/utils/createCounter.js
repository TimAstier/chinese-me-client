const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

export default createCounter;
