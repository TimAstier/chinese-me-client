import { createSelector } from 'reselect';
import insertVariables from '../utils/insertVariables';
import { Map } from 'immutable';
import getCurrentSentences from './getCurrentSentences';
import getAugmentedSettings from './getAugmentedSettings';

const getCurrentSentencesWithValues = createSelector(
  getCurrentSentences,
  getAugmentedSettings,
  (sentences, settings) => {
    const array = [];
    if (sentences) {
      sentences.forEach(sentence => {
        array.push(
          sentence.merge(Map({
            chinese: insertVariables(sentence.get('chinese'), settings),
            translation: insertVariables(sentence.get('translation'), settings)
          }))
        );
      });
    }
    return array;
  }
);

export default getCurrentSentencesWithValues;
