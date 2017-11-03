import { createSelector } from 'reselect';
import { Map } from 'immutable';
import s from './globalizedSelectors';
import countries from 'i18n-iso-countries';

// Install i18n-iso-countries locals
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/zh.json'));

const getCountryName = (alpha3, language) => {
  return alpha3 ? countries.getName(alpha3, language) : undefined;
};

// Add dynamically generated translations to the settings map.
const getAugmentedSettings = createSelector(
  s.settings.getSettings,
  settings => {
    const augmentedSettings = settings.merge(Map({
      // BUG: country names from  i18n-iso-countries give inconsistent result
      // (mix of simp and trad characters)
      nationalityZh: getCountryName(settings.get('nationality'), 'zh'),
      nationalityEn: getCountryName(settings.get('nationality'), 'en')
    }));
    return augmentedSettings.toJS();
  }
);

export default getAugmentedSettings;
