import insertVariables from '../insertVariables';

const settings = {
  chineseFamilyName: '艾',
  chineseGivenName: '思杰',
  nationality: 'FRA'
};

describe('insertVariables', () => {
  it('returns an unchanged string if no placeholder', () => {
    const sentence = '你好！';
    expect(insertVariables(sentence, settings)).toEqual(sentence);
  });

  it('replaces a sentence with one placeholder', () => {
    const sentence = '我姓[CHINESE_FAMILY_NAME]。';
    expect(insertVariables(sentence, settings)).toEqual('我姓艾。');
  });

  it('works with multiple placeholders', () => {
    const sentence = '我姓[CHINESE_FAMILY_NAME]，叫[CHINESE_GIVEN_NAME]。';
    expect(insertVariables(sentence, settings)).toEqual('我姓艾，叫思杰。');
  });

  it('works with several intance of the same placeholder', () => {
    const sentence = '我姓[CHINESE_FAMILY_NAME]，叫[CHINESE_FAMILY_NAME]。';
    expect(insertVariables(sentence, settings)).toEqual('我姓艾，叫艾。');
  });

  it('returns sentence with placeholders if no existing value', () => {
    const sentence = '我姓[UNEXISTING_VALUE]。';
    expect(insertVariables(sentence, settings)).toEqual(sentence);
  });
});
