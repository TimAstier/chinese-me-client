import { createSelector } from 'reselect';
import getUsedChoices from './getUsedChoices';
import isEmpty from 'lodash/isEmpty';

const getChoicesToOrderUserAnswer = createSelector(
  getUsedChoices,
  usedChoices => {
    if (!usedChoices || isEmpty(usedChoices)) {
      return '';
    }
    let result = '';
    usedChoices.forEach(choice => {
      result = result + choice.value;
    });
    return result;
  }
);

export default getChoicesToOrderUserAnswer;
