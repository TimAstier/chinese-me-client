// Those actions are signals
// Unlike delta actions, they do not modify the state
// They only tell the saga watchers that something happened
// Signals can be triggered by user actions or inside sagas

// Action Types

export const types = {
  NEXT: 'signal/NEXT',
  SKIP: 'signal/SKIP',
  NEXT_SENTENCE: 'signal/NEXT_SENTENCE',
  PREVIOUS_SENTENCE: 'signal/PREVIOUS_SENTENCE',
  PLAY_SENTENCE: 'signal/PLAY_SENTENCE',
  STOP_SENTENCE: 'signal/STOP_SENTENCE',
  ASK_QUESTION: 'signal/ASK_QUESTION',
  DISPLAY_EPISODE_OVERVIEW: 'signal/DISPLAY_EPISODE_OVERVIEW',
  EXIT: 'signal/EXIT',
  INIT: 'signal/INIT',
  END_DIALOG: 'signal/END_DIALOG',
  PLAY_AUDIO: 'signal/PLAY_AUDIO',
  CHECK_ANSWER: 'signal/CHECK_ANSWER'
};

// Action Creators

const next = () => ({ type: types.NEXT });
const skip = () => ({ type: types.SKIP });
const nextSentence = () => ({ type: types.NEXT_SENTENCE });
const previousSentence = () => ({ type: types.PREVIOUS_SENTENCE });
const playSentence = () => ({ type: types.PLAY_SENTENCE });
const stopSentence = () => ({ type: types.STOP_SENTENCE });
const askQuestion = () => ({ type: types.ASK_QUESTION });
const displayEpisodeOverview = () => ({ type: types.DISPLAY_EPISODE_OVERVIEW });
const exit = () => ({ type: types.EXIT });
const init = () => ({ type: types.INIT });
const endDialog = () => ({ type: types.END_DIALOG });
const playAudio = () => ({ type: types.PLAY_AUDIO });
const checkAnswer = answer => ({
  type: types.CHECK_ANSWER,
  payload: answer
});

export const actions = {
  next,
  skip,
  nextSentence,
  previousSentence,
  playSentence,
  stopSentence,
  askQuestion,
  displayEpisodeOverview,
  exit,
  init,
  endDialog,
  playAudio,
  checkAnswer
};
