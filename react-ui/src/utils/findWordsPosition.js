// See tests for examples

const findWordsPosition = (string, wordRecords) => {
  const positions = [];
  const words = [];
  const arrayOfChars = string.split('');
  const containedWordRecords = [];
  wordRecords.forEach(record => {
    if (string.indexOf(record.get('chinese')) !== -1) {
      containedWordRecords.push(record);
    }
  });
  arrayOfChars.forEach((char, i) => {
    let matchedOnce = false;
    containedWordRecords.forEach(record => {
      if (record.get('chinese').indexOf(char) !== -1) {
        if (!matchedOnce) {
          positions.push(i);
          words.push([record]);
          matchedOnce = true;
        } else {
          words[words.length - 1].push(record);
        }
      }
    });
  });
  return positions.length === 0 ? {} : { positions, words };
};

export default findWordsPosition;
