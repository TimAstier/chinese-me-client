import { createSelector } from 'reselect';
import insertVariables from '../utils/insertVariables';
import { Map } from 'immutable';
import getCurrentSentences from './getCurrentSentences';
import getAugmentedSettings from './getAugmentedSettings';

const getSentencesWithValues = createSelector(
  getCurrentSentences,
  getAugmentedSettings,
  (sentences, settings) => {
    return sentences.map(s => {
      return s.merge(Map({
        chinese: insertVariables(s.get('chinese'), settings),
        translation: insertVariables(s.get('translation'), settings)
      }));
    });
  }
);

export default getSentencesWithValues;
