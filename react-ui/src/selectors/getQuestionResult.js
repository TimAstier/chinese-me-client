import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import wordings from '../constants/wordings';
import settingConstants from '../constants/settings';
import { questionResults } from '../components';

const getQuestionResult = createSelector(
  s.question.getSetting,
  (setting) => {
    if (!setting) {
      return null;
    }
    return questionResults[wordings[settingConstants[setting].location].profile];
  }
);

export default getQuestionResult;
