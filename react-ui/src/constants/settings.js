// 'name' corresponds to both:
//   - the name of the field from the settings table
//   - the values (in underscore_case) in the array 'requiredUserData' field from the episodes table

const settings = {
  FAMILY_NAME: {
    name: 'familyName',
    questionType: 'openQuestion',
    location: 'S1E1'
  },
  GIVEN_NAME: {
    name: 'givenName',
    questionType: 'openQuestion',
    location: 'S1E1'
  },
  NATIONALITY: {
    name: 'nationality',
    questionType: 'selectQuestion',
    location: 'S1E1'
  },
  GENDER: {
    name: 'gender',
    questionType: 'closedQuestion',
    location: 'S1E1'
  },
  BIRTHDATE: {
    name: 'birthdate',
    questionType: 'date',
    location: 'S1E4'
  },
  MOTHER_TONGUE: {
    name: 'motherTongue',
    questionType: 'selectQuestion',
    location: 'S1E8'
  },
  OTHER_LANGUAGE: {
    name: 'otherLanguage',
    questionType: 'selectQuestion',
    location: 'S1E8'
  },
  REASON_LEARN_CHINESE: {
    name: 'reasonLearnChinese',
    questionType: 'selectQuestion',
    location: 'S1E10'
  }
};

export default settings;
