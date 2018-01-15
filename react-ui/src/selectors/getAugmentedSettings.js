import { createSelector } from 'reselect';
import { Map } from 'immutable';
import s from './globalizedSelectors';
import countries from 'i18n-iso-countries';
import nameMeanings from '../constants/nameMeanings';
import pinyin from 'pinyin';
import pinyinize from 'pinyinize';
import { capitalizeFirstLetter } from '../utils/strings';
import flattenDeep from 'lodash/flattenDeep';

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
      flattenDeep(
        pinyin( // 法国 => [['fa3'], ['guo3']]
          character,
          { style: pinyin.STYLE_TONE2 }
        )
      ).join('')
    )
  );
};

// Add dynamically generated translations to the settings map.
const getAugmentedSettings = createSelector(
  s.settings.getSettings,
  settings => {
    const chineseCountryName = getCountryName(settings.get('nationality'), 'zh');
    const augmentedSettings = settings.merge(Map({
      nationalityZh: chineseCountryName,
      nationalityEn: getCountryName(settings.get('nationality'), 'en'),
      nameMeaning: nameMeanings[settings.get('chineseGivenName')],
      givenNamePinyin: getNamePinyin(settings.get('chineseGivenName')),
      familyNamePinyin: getNamePinyin(settings.get('chineseFamilyName')),
      countryPinyin: getNamePinyin(chineseCountryName)
    }));
    return augmentedSettings.toJS();
  }
);

export default getAugmentedSettings;
