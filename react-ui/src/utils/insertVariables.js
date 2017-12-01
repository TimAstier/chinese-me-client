import camelCase from 'lodash/camelCase';

/**
 * Replace variables placeholders in a string with associated variables.
 *
 * @param {string} sentence The sentence that may contain placeholders.
 * @param {object} settings A mapping over placeholder keys and values.
 * @returns {string} The modified string.
 */

const insertVariables = (sentence, settings) => {
  // Return the original sentence if no placeholder
  if (sentence.indexOf('[') === -1) {
    return sentence;
  }
  let result = sentence;
  const matches = sentence.match(/\[(.*?)\]/g);
  matches.forEach(m => {
    // Replace the placeholder by the setting value, or '__' if not set
    result = result.replace(m, settings[camelCase(m.slice(1, -1))] || '__');
  });
  return result;
};

export default insertVariables;
