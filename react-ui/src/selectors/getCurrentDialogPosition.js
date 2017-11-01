import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getCurrentDialogPosition = createSelector(
  getCurrentEpisode,
  s.study.getCurrentDialogId,
  (episode, id) => {
    if (episode) {
      return episode.dialogs.findIndex(c => String(c) === id) + 1;
    }
    return 0;
  }
);

export default getCurrentDialogPosition;
