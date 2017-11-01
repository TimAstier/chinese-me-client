import { createSelector } from 'reselect';
import getCurrentDialog from './getCurrentDialog';

const getCurrentDialogStatementsCount = createSelector(
  getCurrentDialog,
  dialog => dialog ? dialog.countStatements() : undefined
);

export default getCurrentDialogStatementsCount;
