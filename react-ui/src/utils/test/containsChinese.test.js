import containsChinese from '../containsChinese';

describe('containsChinese', () => {
  it('returns true when param contains Chinese', () => {
    const text = 'My Chinese name is "王玉国".';
    expect(containsChinese(text)).toEqual(true);
  });
  it('returns false when param does not contain Chinese', () => {
    const text = 'My Chinese name is Wang Yuguo.';
    expect(containsChinese(text)).toEqual(false);
  });
  it('returns false for Chinese punctuation', () => {
    const text = 'My Chinese name is Wang Yuguo。';
    expect(containsChinese(text)).toEqual(false);
  });
});
