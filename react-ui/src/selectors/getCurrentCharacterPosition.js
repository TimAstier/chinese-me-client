import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getCurrentCharacterPosition = createSelector(
  getCurrentEpisode,
  s.study.getCurrentCharacterId,
  (episode, id) => {
    if (episode) {
      return episode.characters.findIndex(c => String(c) === id) + 1;
    }
    return 0;
  }
);

export default getCurrentCharacterPosition;
