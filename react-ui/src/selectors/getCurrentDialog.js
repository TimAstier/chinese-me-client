import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentDialog = createSelector(
  s.entities.getDialogs,
  s.study.getCurrentDialogId,
  (dialogs, id) => {
    if (dialogs.get(String(id))) {
      return dialogs.get(String(id));
    }
    return undefined;
  }
);

export default getCurrentDialog;
