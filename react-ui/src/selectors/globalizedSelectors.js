// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import bindSelectors from '../utils/bindSelectors';

import * as fromApp from '../redux/app';
import * as fromAudio from '../redux/audio';
import * as fromAuth from '../redux/auth';
import * as fromBook from '../redux/book';
import * as fromEntities from '../redux/entities';
import * as fromExam from '../redux/exam';
import * as fromExercise from '../redux/exercise';
import * as fromHanzi from '../redux/hanzi';
import * as fromMap from '../redux/map';
import * as fromPractice from '../redux/practice';
import * as fromQuestion from '../redux/question';
import * as fromReview from '../redux/review';
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

const authSelectors = bindSelectors(
  state => state.get('auth'),
  fromAuth.selectors
);

const bookSelectors = bindSelectors(
  state => state.get('book'),
  fromBook.selectors
);

const entitiesSelectors = bindSelectors(
  state => state.get('entities'),
  fromEntities.selectors
);

const examSelectors = bindSelectors(
  state => state.get('exam'),
  fromExam.selectors
);

const exerciseSelectors = bindSelectors(
  state => state.get('exercise'),
  fromExercise.selectors
);

const hanziSelectors = bindSelectors(
  state => state.get('hanzi'),
  fromHanzi.selectors
);

const mapSelectors = bindSelectors(
  state => state.get('map'),
  fromMap.selectors
);

const practiceSelectors = bindSelectors(
  state => state.get('practice'),
  fromPractice.selectors
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
  auth: authSelectors,
  practice: practiceSelectors,
  review: reviewSelectors,
  routing: routingSelectors,
  map: mapSelectors,
  video: videoSelectors,
  exam: examSelectors,
  exercise: exerciseSelectors,
  timer: timerSelectors,
  settings: settingsSelectors,
  hanzi: hanziSelectors,
  question: questionSelectors
};

export default globalizedSelectors;
