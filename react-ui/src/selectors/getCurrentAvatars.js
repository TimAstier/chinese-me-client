import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentDialog from './getCurrentDialog';

const getCurrentAvatars = createSelector(
  getCurrentDialog,
  s.entities.getAvatars,
  (dialog, avatars) => {
    const arrayOfAvatars = [];
    if (dialog && avatars) {
      dialog.avatars.forEach(a => {
        arrayOfAvatars.push(avatars.get(String(a)));
      });
    }
    return arrayOfAvatars;
  }
);

export default getCurrentAvatars;
