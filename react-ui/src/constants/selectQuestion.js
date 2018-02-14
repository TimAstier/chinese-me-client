import countries from 'i18n-iso-countries';
import { languages } from './languages';

function createArrayOfCountries() {
  const results = [];
  const countryObject = countries.getNames('en');
  for (const key in countryObject) {
    if (!countryObject.hasOwnProperty(key)) continue;
    results.push({
      value: key,
      label: countryObject[key]
    });
  }
  const sortedResults = results.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });
  // Bring Åland Islands on the top (is not sorted properly)
  sortedResults.unshift(sortedResults.pop());
  return sortedResults;
}

const languagesChoices = languages.map(e => ({ value: e, label: e }));

const constants = {
  NATIONALITY: {
    label: 'What is your nationality?',
    choices: createArrayOfCountries()
  },
  REASON_LEARN_CHINESE: {
    label: 'I want to learn Chinese because ...',
    // Should DRY by using constants from reasons
    choices: [
      { value: 'culture', label: 'I like Chinese culture.' },
      { value: 'travel', label: 'I want to travel in China.' },
      { value: 'study', label: 'I want to study in China.' },
      { value: 'work', label: 'I want to work in China.' },
      { value: 'huaqiao', label: 'I have Chinese heritage.' },
      { value: 'relationship_boyfriend', label: 'My boyfriend is Chinese.' },
      { value: 'relationship_girlfriend', label: 'My girlfriend is Chinese.' },
      { value: 'relationship_husband', label: 'My husband is Chinese.' },
      { value: 'relationship_wife', label: 'My wife is Chinese.' }
    ]
  },
  MOTHER_TONGUE: {
    label: 'What is your main native language?',
    choices: languagesChoices
  },
  OTHER_LANGUAGE: {
    label: 'What other language can you speak?',
    choices: [ { value: 'N/A', label: 'None (except Chinese!)' }, ...languagesChoices ]
  }
};

export default constants;
