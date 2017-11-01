import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getNextGrammarId = createSelector(
  getCurrentEpisode,
  s.study.getCurrentGrammarId,
  (episode, id) => {
    if (episode) {
      const index = episode.grammars.findIndex(c => c === Number(id));
      if (episode.grammars[index + 1]) {
        return episode.grammars[index + 1];
      }
      return undefined;
    }
    return undefined;
  }
);

export default getNextGrammarId;
