// 'name' corresponds to both:
//   - the name of the field from the settings table
//   - the values (in underscore_case) in the array 'requiredUserData' field from the episodes table

const settings = {
  FAMILY_NAME: {
    name: 'familyName',
    questionType: 'openQuestion'
  },
  GIVEN_NAME: {
    name: 'givenName',
    questionType: 'openQuestion'
  },
  NATIONALITY: {
    name: 'nationality',
    questionType: 'selectQuestion'
  },
  GENDER: {
    name: 'gender',
    questionType: 'closedQuestion'
  },
  BIRTHDATE: {
    name: 'birthdate',
    questionType: 'date'
  },
  REASON_LEARN_CHINESE: {
    name: 'reasonLearnChinese',
    questionType: 'selectQuestion'
  },
  MOTHER_TONGUE: {
    name: 'motherTongue',
    questionType: 'selectQuestion'
  },
  OTHER_LANGUAGE: {
    name: 'otherLanguage',
    questionType: 'selectQuestion'
  }
};

export default settings;
