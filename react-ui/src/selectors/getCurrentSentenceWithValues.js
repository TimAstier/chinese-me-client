import { createSelector } from 'reselect';
import insertVariables from '../utils/insertVariables';
import { Map } from 'immutable';
import getCurrentSentence from './getCurrentSentence';
import getAugmentedSettings from './getAugmentedSettings';
import getCurrentEpisode from './getCurrentEpisode';
import getCurrentDialog from './getCurrentDialog';
import getCurrentStatement from './getCurrentStatement';
import { audioUrls } from '../constants/urls';

const getCurrentSentenceWithValues = createSelector(
  getCurrentEpisode,
  getCurrentDialog,
  getCurrentStatement,
  getCurrentSentence,
  getAugmentedSettings,
  (episode, dialog, statement, sentence, settings) => {
    return sentence.merge(Map({
      chinese: insertVariables(sentence.get('chinese'), settings),
      translation: insertVariables(sentence.get('translation'), settings),
      audioUrl: dialog.hasAudio ?
        `${audioUrls.sentencesPath}/${episode.number}_${dialog.order}_${statement.order}_${sentence.order}.mp3`
        : null
    }));
  }
);

export default getCurrentSentenceWithValues;
