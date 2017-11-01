import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getPreviousDialogId = createSelector(
  getCurrentEpisode,
  s.study.getCurrentDialogId,
  (episode, id) => {
    if (episode) {
      const index = episode.dialogs.findIndex(c => c === Number(id));
      if (episode.dialogs[index - 1]) {
        return episode.dialogs[index - 1];
      }
      return undefined;
    }
    return undefined;
  }
);

export default getPreviousDialogId;
