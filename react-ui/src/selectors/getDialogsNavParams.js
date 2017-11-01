import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import getCurrentDialogPosition from './getCurrentDialogPosition';

const getDialogsNavParams = createSelector(
  getCurrentEpisode,
  getCurrentDialogPosition,
  (currentEpisode, currentDialogPosition) => {
    try {
      const dialogsCount = currentEpisode.dialogs.length;
      return {
        type: 'dialog',
        currentElement: currentDialogPosition,
        totalElements: dialogsCount
      };
    } catch (e) {
      return undefined;
    }
  }
);

export default getDialogsNavParams;
