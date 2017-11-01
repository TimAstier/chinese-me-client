import { createSelector } from 'reselect';
import getCurrentStatementIndex from './getCurrentStatementIndex';
import getCurrentDialogStatementsCount from './getCurrentDialogStatementsCount';

const getDialogCompletion = createSelector(
  getCurrentStatementIndex,
  getCurrentDialogStatementsCount,
  (index, count) => (index && count) ? index / (count - 1) * 100 : 0
);

export default getDialogCompletion;
