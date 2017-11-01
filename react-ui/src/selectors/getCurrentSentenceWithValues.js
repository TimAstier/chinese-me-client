import { createSelector } from 'reselect';
import insertVariables from '../utils/insertVariables';
import { Map } from 'immutable';
import getCurrentSentence from './getCurrentSentence';
import getAugmentedSettings from './getAugmentedSettings';

const getCurrentSentenceWithValues = createSelector(
  getCurrentSentence,
  getAugmentedSettings,
  (sentence, settings) => {
    return sentence.merge(Map({
      chinese: insertVariables(sentence.get('chinese'), settings),
      translation: insertVariables(sentence.get('translation'), settings)
    }));
  }
);

export default getCurrentSentenceWithValues;
