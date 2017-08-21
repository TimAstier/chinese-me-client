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
  PLAY_AUDIO: 'signal/PLAY_AUDIO',
  CHECK_ANSWER: 'signal/CHECK_ANSWER',
  FETCH_EPISODES: 'signal/FETCH_EPISODES',
  CREATE_NEW_USER: 'signal/CREATE_NEW_USER',
  LOGIN_REQUEST: 'signal/LOGIN_REQUEST',
  LOGIN_ERROR: 'signal/LOGIN_ERROR',
  LOGOUT: 'signal/LOGOUT',
  SEND_FEEDBACK: 'signal/SEND_FEEDBACK',
  ACTIVATE: 'signal/ACTIVATE',
  INIT_APP: 'signal/INIT_APP',
  MAP_LINK_CLICK: 'signal/MAP_LINK_CLICK'
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
const fetchEpisodes = () => ({ type: types.FETCH_EPISODES });
const endDialog = () => ({ type: types.END_DIALOG });
const playAudio = () => ({ type: types.PLAY_AUDIO });
const checkAnswer = () => ({ type: types.CHECK_ANSWER });
const createNewUser = payload => ({
  type: types.CREATE_NEW_USER,
  payload
});
const loginRequest = payload => ({
  type: types.LOGIN_REQUEST,
  payload
});
const loginError = () => ({ type: types.LOGIN_ERROR });
const logout = () => ({ type: types.LOGOUT });
const sendFeedback = payload => ({
  type: types.SEND_FEEDBACK,
  payload
});
const activate = payload => ({
  type: types.ACTIVATE,
  payload
});
const initApp = () => ({ type: types.INIT_APP });
const mapLinkClick = link => ({
  type: types.MAP_LINK_CLICK,
  payload: { link }
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
  fetchEpisodes,
  endDialog,
  playAudio,
  checkAnswer,
  createNewUser,
  loginRequest,
  loginError,
  logout,
  sendFeedback,
  activate,
  initApp,
  mapLinkClick
};
