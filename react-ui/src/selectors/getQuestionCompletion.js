import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getRequiredUserData from './getRequiredUserData';

const getQuestionprogression = createSelector(
  getRequiredUserData,
  s.question.getCurrentIndex,
  (settingsArray, currentIndex) => {
    return (settingsArray && currentIndex) ? currentIndex / (settingsArray.length) * 100 : 0;
  }
);

export default getQuestionprogression;
