import countries from 'i18n-iso-countries';

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

const constants = {
  NATIONALITY: {
    label: 'What is your nationality?',
    choices: createArrayOfCountries()
  }
};

export default constants;
