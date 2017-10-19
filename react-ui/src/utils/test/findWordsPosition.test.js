import findWordsPosition from '../findWordsPosition';
import { Record } from 'Immutable';

const Word = Record({ chinese: null });
const r = string => new Word({ chinese: string });

describe('findWordPosition', () => {
  it('works for single-character words', () => {
    const string = '我是中国人。';
    const words = ['国'];
    const wordRecords = words.map(w => r(w));
    const wordsPosition = findWordsPosition(string, wordRecords);
    const expectedResult = {
      positions: [3],
      words: [[r('国')]]
    };
    expect(wordsPosition).toEqual(expectedResult);
  });

  it('works for multiple single-character words', () => {
    const string = '我是中国人。';
    const words = ['我', '国'];
    const wordRecords = words.map(w => r(w));
    const wordsPosition = findWordsPosition(string, wordRecords);
    const expectedResult = {
      positions: [0, 3],
      words: [[r('我')], [r('国')]]
    };
    expect(wordsPosition).toEqual(expectedResult);
  });

  it('works for words with multiple characters', () => {
    const string = '我是中国人。';
    const words = ['中国'];
    const wordRecords = words.map(w => r(w));
    const wordsPosition = findWordsPosition(string, wordRecords);
    const expectedResult = {
      positions: [2, 3],
      words: [[r('中国')], [r('中国')]]
    };
    expect(wordsPosition).toEqual(expectedResult);
  });

  it('works for overlaping words of various sizes', () => {
    const string = '我是中国人。';
    const words = ['我', '中国', '中', '人'];
    const wordRecords = words.map(w => r(w));
    const wordsPosition = findWordsPosition(string, wordRecords);
    const expectedResult = {
      positions: [0, 2, 3, 4],
      words: [[r('我')], [r('中国'), r('中')], [r('中国')], [r('人')]]
    };
    expect(wordsPosition).toEqual(expectedResult);
  });

  it('returns an empty object if no word matched', () => {
    const string = '我是中国人。';
    const words = ['他', '叫', '什么'];
    const wordRecords = words.map(w => r(w));
    const wordsPosition = findWordsPosition(string, wordRecords);
    const expectedResult = {};
    expect(wordsPosition).toEqual(expectedResult);
  });

  it('does not match words that are partially contained', () => {
    const string = '我叫王玉国。';
    const words = ['中国', '王后'];
    const wordRecords = words.map(w => r(w));
    const wordsPosition = findWordsPosition(string, wordRecords);
    const expectedResult = {};
    expect(wordsPosition).toEqual(expectedResult);
  });
});
