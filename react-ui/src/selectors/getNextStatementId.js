import { createSelector } from 'reselect';
import getCurrentDialog from './getCurrentDialog';
import  getCurrentStatementIndex from './getCurrentStatementIndex';

const getNextStatementId = createSelector(
  getCurrentDialog,
  getCurrentStatementIndex,
  (dialog, i) => dialog.statements[i + 1] ? dialog.statements[i + 1] : undefined
);

export default getNextStatementId;
