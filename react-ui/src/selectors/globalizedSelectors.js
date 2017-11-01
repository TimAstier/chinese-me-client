// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import bindSelectors from '../utils/bindSelectors';

import * as fromAudio from '../redux/audio';
import * as fromAudioToText from '../redux/audioToText';
import * as fromAuth from '../redux/auth';
import * as fromCharacterPinyin from '../redux/characterPinyin';
import * as fromEntities from '../redux/entities';
import * as fromExam from '../redux/exam';
import * as fromHanzi from '../redux/hanzi';
import * as fromMap from '../redux/map';
import * as fromMultipleChoice from '../redux/multipleChoice';
import * as fromReview from '../redux/review';
import * as fromRouting from '../redux/routing';
import * as fromSettings from '../redux/settings';
import * as fromStudy from '../redux/study';
import * as fromTimer from '../redux/timer';
import * as fromUi from '../redux/ui';
import * as fromVideo from '../redux/video';

// TODO: DRY

const audioSelectors = bindSelectors(
  state => state.get('audio'),
  fromAudio.selectors
);

const audioToTextSelectors = bindSelectors(
  state => state.get('audioToText'),
  fromAudioToText.selectors
);

const authSelectors = bindSelectors(
  state => state.get('auth'),
  fromAuth.selectors
);

const characterPinyinSelectors = bindSelectors(
  state => state.get('characterPinyin'),
  fromCharacterPinyin.selectors
);

const entitiesSelectors = bindSelectors(
  state => state.get('entities'),
  fromEntities.selectors
);

const examSelectors = bindSelectors(
  state => state.get('exam'),
  fromExam.selectors
);

const hanziSelectors = bindSelectors(
  state => state.get('hanzi'),
  fromHanzi.selectors
);

const mapSelectors = bindSelectors(
  state => state.get('map'),
  fromMap.selectors
);

const multipleChoiceSelectors = bindSelectors(
  state => state.get('multipleChoice'),
  fromMultipleChoice.selectors
);

const reviewSelectors = bindSelectors(
  state => state.get('review'),
  fromReview.selectors
);

const routingSelectors = bindSelectors(
  state => state.get('routing'),
  fromRouting.selectors
);

const settingsSelectors = bindSelectors(
  state => state.get('settings'),
  fromSettings.selectors
);

const studySelectors = bindSelectors(
  state => state.get('study'),
  fromStudy.selectors
);

const timerSelectors = bindSelectors(
  state => state.get('timer'),
  fromTimer.selectors
);

const uiSelectors = bindSelectors(
  state => state.get('ui'),
  fromUi.selectors
);

const videoSelectors = bindSelectors(
  state => state.get('video'),
  fromVideo.selectors
);

const globalizedSelectors = {
  entities: entitiesSelectors,
  study: studySelectors,
  ui: uiSelectors,
  audio: audioSelectors,
  audioToText: audioToTextSelectors,
  characterPinyin: characterPinyinSelectors,
  auth: authSelectors,
  review: reviewSelectors,
  routing: routingSelectors,
  map: mapSelectors,
  multipleChoice: multipleChoiceSelectors,
  video: videoSelectors,
  exam: examSelectors,
  timer: timerSelectors,
  settings: settingsSelectors,
  hanzi: hanziSelectors,
};

export default globalizedSelectors;
