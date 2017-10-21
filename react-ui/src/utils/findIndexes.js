/**
 * An augmented version of findIndex that returns an arrays of indexes for
 * all matching occurences.
 *
 * @param {string} string The string to inspect.
 * @param {string} value The value to search for.
 * @returns {Array} Returns an aray of indexes.
 */

function findIndexes(string, value) {
  const indices = [];
  for (let pos = string.indexOf(value); pos !== -1; pos = string.indexOf(value, pos + 1)) {
    indices.push(pos);
  }
  return indices;
}

export default findIndexes;
