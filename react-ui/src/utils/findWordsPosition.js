// See tests for examples
import times from 'lodash/times';
import isEmpty from 'lodash/isEmpty';
import findIndexes from './findIndexes';

const findWordsPosition = (string, wordRecords) => {
  const positions = [];
  let words = [];
  times(string.length, () => words.push([]));
  wordRecords
    .filter(record => string.indexOf(record.get('chinese') !== -1))
    .forEach(record => {
      const matchIndexes = findIndexes(string, record.get('chinese'));
      matchIndexes.forEach(index => {
        for (let i = 0; i < record.get('chinese').length; i++) {
          words[index + i].push(record);
        }
      });
    });
  words.forEach((array, i) => {
    if (!isEmpty(array)) {
      positions.push(i);
    }
  });
  words = words.filter(array => !isEmpty(array));
  return isEmpty(positions) ? {} : { positions, words };
};

export default findWordsPosition;
