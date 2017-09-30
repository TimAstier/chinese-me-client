// Those actions are signals
// Unlike delta actions, they do not modify the state
// They only tell the saga watchers that something happened
// Signals can be triggered by user actions or inside sagas

// Action Types

export const types = {
  NEXT: 'signal/NEXT',
  SKIP: 'signal/SKIP',
  NEXT_SENTENCE: 'signal/NEXT_SENTENCE',
  // PREVIOUS_SENTENCE: 'signal/PREVIOUS_SENTENCE',
  SWITCH_SENTENCE: 'signal/SWITCH_SENTENCE',
  NEXT_STATEMENT: 'signal/NEXT_STATEMENT',
  PREVIOUS_STATEMENT: 'signal/PREVIOUS_STATEMENT',
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
  MAP_LINK_CLICK: 'signal/MAP_LINK_CLICK',
  DIALOG_LINK_CLICK: 'signal/DIALOG_LINK_CLICK',
  VIDEO_ENDED: 'signal/VIDEO_ENDED',
  ELEMENTS_NAV_PREVIOUS_CLICK: 'signal/ELEMENTS_NAV_PREVIOUS_CLICK',
  ELEMENTS_NAV_NEXT_CLICK: 'signal/ELEMENTS_NAV_NEXT_CLICK',
  NEXT_SCREEN: 'signal/NEXT_SCREEN',
  REVIEW_COMPLETED: 'signal/REVIEW_COMPLETED',
  START_EPISODE: 'signal/START_EPISODE',
  RUN_EPISODE_SCREEN: 'signal/RUN_EPISODE_SCREEN',
  UNMOUNT_EPISODE_SCREEN: 'signal/UNMOUNT_EPISODE_SCREEN',
  STROKE_ANIMATION_FINISHED: 'signal/STROKE_ANIMATION_FINISHED'
};

// Action Creators

const next = () => ({ type: types.NEXT });
const skip = () => ({ type: types.SKIP });
const nextSentence = () => ({ type: types.NEXT_SENTENCE });
// const previousSentence = () => ({ type: types.PREVIOUS_SENTENCE });
const switchSentence = id => ({
  type: types.SWITCH_SENTENCE,
  payload: { id }
});
const playSentence = () => ({ type: types.PLAY_SENTENCE });
const nextStatement = () => ({ type: types.NEXT_STATEMENT });
const previousStatement = () => ({ type: types.PREVIOUS_STATEMENT });
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
const dialogLinkClick = link => ({
  type: types.DIALOG_LINK_CLICK,
  payload: { link }
});
const videoEnded = () => ({
  type: types.VIDEO_ENDED
});
const elementsNavPreviousClick = () => ({
  type: types.ELEMENTS_NAV_PREVIOUS_CLICK
});
const elementsNavNextClick = () => ({
  type: types.ELEMENTS_NAV_NEXT_CLICK
});
const nextScreen = shouldUrlBeSkipped => ({
  type: types.NEXT_SCREEN,
  payload: { shouldUrlBeSkipped }
});
const reviewCompleted = () => ({
  type: types.REVIEW_COMPLETED
});
const startEpisode = id => ({
  type: types.START_EPISODE,
  payload: { id }
});
const runEpisodeScreen = url => ({
  type: types.RUN_EPISODE_SCREEN,
  payload: { url }
});
const unmountEpisodeScreen = () => ({
  type: types.UNMOUNT_EPISODE_SCREEN
});
const strokeAnimationFinished = () => ({
  type: types.STROKE_ANIMATION_FINISHED
});

export const actions = {
  next,
  skip,
  nextSentence,
  // previousSentence,
  switchSentence,
  nextStatement,
  previousStatement,
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
  mapLinkClick,
  dialogLinkClick,
  videoEnded,
  elementsNavPreviousClick,
  elementsNavNextClick,
  nextScreen,
  reviewCompleted,
  startEpisode,
  runEpisodeScreen,
  unmountEpisodeScreen,
  strokeAnimationFinished
};
