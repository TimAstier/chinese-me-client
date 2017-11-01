import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentMultipleChoice = createSelector(
  s.entities.getMultipleChoices,
  s.study.getCurrentMultipleChoiceId,
  (multipleChoices, id) => multipleChoices.get(String(id))
);

export default getCurrentMultipleChoice;
