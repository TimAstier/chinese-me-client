import { createSelector } from 'reselect';
import getCurrentEpisode from './getCurrentEpisode';
import getCurrentCharacterPosition from './getCurrentCharacterPosition';

const getCharactersNavParams = createSelector(
  getCurrentEpisode,
  getCurrentCharacterPosition,
  (currentEpisode, currentCharacterPosition) => {
    try {
      const charactersCount = currentEpisode.characters.length;
      return {
        type: 'character',
        currentElement: currentCharacterPosition,
        totalElements: charactersCount
      };
    } catch (e) {
      return undefined;
    }
  }
);

export default getCharactersNavParams;
