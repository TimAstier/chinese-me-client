import { createSelector } from 'reselect';
import getCurrentDialog from './getCurrentDialog';
import s from './globalizedSelectors';

const getSentencesCountInCurrentDialog = createSelector(
  getCurrentDialog,
  s.entities.getStatements,
  (dialog, statements) => {
    let count = 0;
    dialog.statements.forEach(statementId => {
      count = count + statements.get(String(statementId)).sentences.length;
    });
    return count;
  }
);

export default getSentencesCountInCurrentDialog;
