import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getCurrentGrammarPosition = createSelector(
  getCurrentEpisode,
  s.study.getCurrentGrammarId,
  (episode, id) => {
    if (episode) {
      return episode.grammars.findIndex(c => String(c) === id) + 1;
    }
    return 0;
  }
);

export default getCurrentGrammarPosition;
