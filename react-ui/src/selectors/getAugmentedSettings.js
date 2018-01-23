/* LIST OF ALL AVAILABLE USER VARIABLES */

// [FAMILY_NAME]           => Alexandre
// [GIVEN_NAME]            => Nicolas
// [CHINESE_FAMILY_NAME]   => 安
// [CHINESE_GIVEN_NAME]    => 杰
// [NATIONALITY_ZH]        => 法国
// [NATIONALITY_EN]        => France
// [AGE]                   => 二十六
// [BIRTH_YEAR]            => 1992
// [BIRTH_MONTH]           => 1
// [BIRTH_MONTH_EN]        => January TODO
// [BIRTH_DAY]             => 31
// [BIRTH_ANIMAL]          => 样
// [BIRTH_ANIMAL_EN]       => goat TODO
// [GENDER_TITLE]          => 先生/女士
// [GENDER_TITLE_EN]       => mister/miss TODO
// [AGE_COMPARISON]        => 大
// [AGE_DIFFERENCE]        => 三
// [AGE_DIFFERENCE_EN]     => older TODO
// [LANGUAGE_1]            => 英语 TODO
// [LANGUAGE_2]            => 法语 TODO
// [LANGUAGE_3]            => 中文 TODO
// [REASON_LEARN_CHINESE]  => 我喜欢中国文化。

import { createSelector } from 'reselect';
import { Map } from 'immutable';
import s from './globalizedSelectors';
import countries from 'i18n-iso-countries';
import nameMeanings from '../constants/nameMeanings';
import pinyin from 'chinese-to-pinyin';
import pinyinize from 'pinyinize';
import { capitalizeFirstLetter } from '../utils/strings';
import chineseLunar from 'chinese-lunar';
import moment from 'moment';

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
      pinyin( // 法国 => 'fa3 guo3'
        character,
        {numberTone: true}
      )
    )
  ).replace(/\s/g, '');
};

const getAge = dateString => {
  if (!dateString) {
    return null;
  }
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return integerToChinese(age);
};

const getYear = dateString => {
  if (!dateString) {
    return null;
  }
  const birthDate = new Date(dateString);
  return birthDate.getFullYear();
};

const getMonth = dateString => {
  if (!dateString) {
    return null;
  }
  const birthDate = new Date(dateString);
  return birthDate.getMonth() + 1;
};

const getDay = dateString => {
  if (!dateString) {
    return null;
  }
  const birthDate = new Date(dateString);
  return birthDate.getDate();
};

const getChineseZodiac = dateString => {
  if (!dateString) {
    return null;
  }
  const lunarYear = chineseLunar.solarToLunar(new Date(dateString)).year;
  return chineseLunar.animalName(lunarYear);
};

const getGenderTitle = gender => {
  if (!gender) {
    return null;
  }
  if (gender === 'Male') { return '先生'; }
  return '女士';
};

const getAgeComparison = birthDate => {
  const userBirthdate = new Date(birthDate);
  const personalityBirthdate = new Date('1979-11-23');
  return userBirthdate - personalityBirthdate < 0 ? '小' : '大';
};

const integerToChinese = integer => {
  const digits = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const ten = Math.trunc(integer / 10);
  const unit = integer - 10 * ten;
  if (ten === 0) {
    if (unit === 0) {
      return '〇';
    }
    return digits[unit];
  } else if (ten === 1) {
    return '十' + digits[unit];
  }
  return digits[ten] + '十' + digits[unit];
};

const getAgeDifference = (birthDate) => {
  if (!birthDate) {
    return null;
  }
  const userBirthdate = new Date(birthDate);
  const personalityBirthdate = new Date('1979-11-23');
  const years = Math.abs(moment.duration(userBirthdate - personalityBirthdate).years());
  return integerToChinese(years);
};

const getReasonLearnChinese = reason => {
  if (!reason) {
    return null;
  }
  switch (reason) {
    case 'culture': return '我喜欢中国文化';
    case 'travel': return '我想去中国旅游';
    case 'study': return '我想去中国上学';
    case 'work': return '我想去中国工作';
    case 'huaqiao': return '我是华侨';
    case 'relationship_boyfriend': return '我男朋友是中国人';
    case 'relationship_girlfriend': return '我女朋友是中国人';
    case 'relationship_husband': return '我老公是中国人';
    case 'relationship_wife': return '我老婆是中国人';
    default: return null;
  }
};

// Add dynamically generated variables to the settings map.
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
      countryPinyin: getNamePinyin(chineseCountryName),
      age: getAge(settings.get('birthdate')),
      birthYear: getYear(settings.get('birthdate')),
      birthMonth: getMonth(settings.get('birthdate')),
      birthDay: getDay(settings.get('birthdate')),
      birthAnimal: getChineseZodiac(settings.get('birthdate')),
      genderTitle: getGenderTitle(settings.get('gender')),
      ageComparison: getAgeComparison(settings.get('birthdate')),
      ageDifference: getAgeDifference(settings.get('birthdate')),
      reasonLearnChinese: getReasonLearnChinese(settings.get('reasonLearnChinese'))
    }));
    return augmentedSettings.toJS();
  }
);

export default getAugmentedSettings;
