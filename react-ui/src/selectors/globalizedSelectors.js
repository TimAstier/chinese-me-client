// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import bindSelectors from '../utils/bindSelectors';

import * as fromApp from '../redux/app';
import * as fromAudio from '../redux/audio';
import * as fromAudioToWords from '../redux/audioToWords';
import * as fromAuth from '../redux/auth';
import * as fromBook from '../redux/book';
import * as fromCharacterPinyin from '../redux/characterPinyin';
import * as fromEntities from '../redux/entities';
import * as fromExam from '../redux/exam';
import * as fromFreeInput from '../redux/freeInput';
import * as fromHanzi from '../redux/hanzi';
import * as fromMap from '../redux/map';
import * as fromMultipleChoice from '../redux/multipleChoice';
import * as fromPractice from '../redux/practice';
import * as fromQuestion from '../redux/question';
import * as fromRouting from '../redux/routing';
import * as fromSettings from '../redux/settings';
import * as fromStudy from '../redux/study';
import * as fromTimer from '../redux/timer';
import * as fromUi from '../redux/ui';
import * as fromVideo from '../redux/video';

// TODO: DRY (idea: export a name constant from every duck)

const appSelectors = bindSelectors(
  state => state.get('app'),
  fromApp.selectors
);

const audioSelectors = bindSelectors(
  state => state.get('audio'),
  fromAudio.selectors
);

const audioToWordsSelectors = bindSelectors(
  state => state.get('audioToWords'),
  fromAudioToWords.selectors
);

const authSelectors = bindSelectors(
  state => state.get('auth'),
  fromAuth.selectors
);

const bookSelectors = bindSelectors(
  state => state.get('book'),
  fromBook.selectors
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

const freeInputSelectors = bindSelectors(
  state => state.get('freeInput'),
  fromFreeInput.selectors
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

const practiceSelectors = bindSelectors(
  state => state.get('practice'),
  fromPractice.selectors
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

const questionSelectors = bindSelectors(
  state => state.get('question'),
  fromQuestion.selectors
);

const globalizedSelectors = {
  app: appSelectors,
  entities: entitiesSelectors,
  study: studySelectors,
  ui: uiSelectors,
  book: bookSelectors,
  audio: audioSelectors,
  audioToWords: audioToWordsSelectors,
  characterPinyin: characterPinyinSelectors,
  auth: authSelectors,
  practice: practiceSelectors,
  routing: routingSelectors,
  map: mapSelectors,
  multipleChoice: multipleChoiceSelectors,
  video: videoSelectors,
  exam: examSelectors,
  freeInput: freeInputSelectors,
  timer: timerSelectors,
  settings: settingsSelectors,
  hanzi: hanziSelectors,
  question: questionSelectors
};

export default globalizedSelectors;
