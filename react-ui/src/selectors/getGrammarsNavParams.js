import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import getCurrentGrammarPosition from './getCurrentGrammarPosition';

const getGrammarsNavParams = createSelector(
  getCurrentEpisode,
  getCurrentGrammarPosition,
  (currentEpisode, currentGrammarPosition) => {
    try {
      const grammarsCount = currentEpisode.grammars.length;
      return {
        type: 'grammar',
        currentElement: currentGrammarPosition,
        totalElements: grammarsCount
      };
    } catch (e) {
      return undefined;
    }
  }
);

export default getGrammarsNavParams;
