import { createSelector } from 'reselect';
import { Map } from 'immutable';
import s from './globalizedSelectors';
import countries from 'i18n-iso-countries';
import nameMeanings from '../constants/nameMeanings';
import pinyin from 'pinyin';
import pinyinize from 'pinyinize';
import { capitalizeFirstLetter } from '../utils/strings';

// Install i18n-iso-countries locals
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/zh.json'));

const getCountryName = (alpha3, language) => {
  return alpha3 ? countries.getName(alpha3, language) : undefined;
};

const getNamePinyin = character => {
  if (!character) {
    return null;
  }
  return capitalizeFirstLetter( // wǒ => Wǒ
    pinyinize( // wo3 => wǒ
      pinyin( // 我 => wo3
        character,
        { style: pinyin.STYLE_TONE2 }
      )[0][0]
    )
  );
};

// Add dynamically generated translations to the settings map.
const getAugmentedSettings = createSelector(
  s.settings.getSettings,
  settings => {
    const augmentedSettings = settings.merge(Map({
      nationalityZh: getCountryName(settings.get('nationality'), 'zh'),
      nationalityEn: getCountryName(settings.get('nationality'), 'en'),
      nameMeaning: nameMeanings[settings.get('chineseGivenName')],
      givenNamePinyin: getNamePinyin(settings.get('chineseGivenName')),
      familyNamePinyin: getNamePinyin(settings.get('chineseFamilyName'))
    }));
    return augmentedSettings.toJS();
  }
);

export default getAugmentedSettings;
