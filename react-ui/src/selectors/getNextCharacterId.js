import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getNextCharacterId = createSelector(
  getCurrentEpisode,
  s.study.getCurrentCharacterId,
  (episode, id) => {
    if (episode) {
      const index = episode.characters.findIndex(c => c === Number(id));
      if (episode.characters[index + 1]) {
        return episode.characters[index + 1];
      }
      return undefined;
    }
    return undefined;
  }
);

export default getNextCharacterId;
