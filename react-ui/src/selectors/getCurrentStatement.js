import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentStatement = createSelector(
  s.entities.getStatements,
  s.study.getCurrentStatementId,
  (statements, id) => statements.get(String(id))
);

export default getCurrentStatement;
