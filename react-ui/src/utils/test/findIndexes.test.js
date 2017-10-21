import findIndexes from '../findIndexes';

describe('findIndexes', () => {
  it('returns all indexes of a value in a string', () => {
    const string = '我老公是老师, 她老公是书法家。';
    const value = '老公';
    expect(findIndexes(string, value)).toEqual([1, 9]);
  });
});
