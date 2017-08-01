// Action Types

export const types = {
  NEXT: 'NEXT',
  SKIP: 'SKIP',
  NEXT_SENTENCE: 'NEXT_SENTENCE',
  PREVIOUS_SENTENCE: 'PREVIOUS_SENTENCE',
  PLAY_SENTENCE: 'PLAY_SENTENCE',
  STOP_SENTENCE: 'STOP_SENTENCE',
  ASK_QUESTION: 'ASK_QUESTION',
  DISPLAY_EPISODE_OVERVIEW: 'DISPLAY_EPISODE_OVERVIEW',
  EXIT: 'EXIT',
  INIT: 'INIT',
  END_DIALOG: 'END_DIALOG',
  PLAY_AUDIO: 'PLAY_AUDIO'
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
  playAudio
};
