import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentDialog from './getCurrentDialog';

const getCurrentStatementIndex = createSelector(
  getCurrentDialog,
  s.study.getCurrentStatementId,
  (dialog, id) => {
    if (dialog) {
      return dialog.statements.findIndex(s => s === id);
    }
    return 0;
  }
);

export default getCurrentStatementIndex;
