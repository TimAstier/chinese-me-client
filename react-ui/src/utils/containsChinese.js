/**
 * Check if a string contains Chinese.
 *
 * @param {string} text The text to analyse.
 * @returns {boolean} Returns true if contains some Chinese, else false.
 */

const containsChinese = text =>
  text.match(/[\u3400-\u9FBF]/) ? true : false;

export default containsChinese;
