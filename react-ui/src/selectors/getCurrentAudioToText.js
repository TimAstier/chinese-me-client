import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentAudioToText = createSelector(
  s.entities.getAudioToTexts,
  s.study.getCurrentAudioToTextId,
  (audioToTexts, id) => audioToTexts.get(String(id))
);

export default getCurrentAudioToText;
