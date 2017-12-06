import { EventTypes } from 'redux-segment';

// Those actions are signals
// Unlike delta actions, they do not modify the state
// They only tell the saga watchers that something happened
// Signals can be triggered by user actions or inside sagas

// Action Types

export const types = {
  NEXT: 'signal/NEXT',
  NEXT_SENTENCE: 'signal/NEXT_SENTENCE',
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
  NEW_USER_CREATED: 'signal/NEW_USER_CREATED',
  LOGIN_REQUEST: 'signal/LOGIN_REQUEST',
  LOGIN_ERROR: 'signal/LOGIN_ERROR',
  LOGOUT: 'signal/LOGOUT',
  SEND_FEEDBACK: 'signal/SEND_FEEDBACK',
  ACTIVATE: 'signal/ACTIVATE',
  INIT_APP: 'signal/INIT_APP',
  RELOAD_APP: 'signal/RELOAD_APP',
  MAP_LINK_CLICK: 'signal/MAP_LINK_CLICK',
  DIALOG_LINK_CLICK: 'signal/DIALOG_LINK_CLICK',
  VIDEO_ENDED: 'signal/VIDEO_ENDED',
  NEXT_SCREEN: 'signal/NEXT_SCREEN',
  PRACTICE_COMPLETED: 'signal/PRACTICE_COMPLETED',
  START_EPISODE: 'signal/START_EPISODE',
  RUN_EPISODE_SCREEN: 'signal/RUN_EPISODE_SCREEN',
  UNMOUNT_EPISODE_SCREEN: 'signal/UNMOUNT_EPISODE_SCREEN',
  STROKE_ANIMATION_FINISHED: 'signal/STROKE_ANIMATION_FINISHED',
  STROKE_QUIZ_COMPLETED: 'signal/STROKE_QUIZ_COMPLETED',
  START_ROLEPLAY: 'signal/START_ROLEPLAY',
  PAUSE: 'signal/PAUSE',
  EXAM_COMPLETED: 'signal/EXAM_COMPLETED',
  PLAY_SUCCESS_SOUND: 'signal/PLAY_SUCCESS_SOUND',
  PLAY_WRONG_SOUND: 'signal/PLAY_WRONG_SOUND',
  PLAY_LEVEL_WIN_SOUND: 'signal/PLAY_LEVEL_WIN_SOUND',
  PLAY_LEVEL_FAIL_SOUND: 'signal/PLAY_LEVEL_FAIL_SOUND',
  NEXT_QUESTION: 'signal/NEXT_QUESTION',
  QUESTION_ANSWERED: 'signal/QUESTION_ANSWERED',
  NEW_WORD_LINK_CLICKED: 'signal/NEW_WORD_LINK_CLICKED',
  SET_EPISODE_DATA: 'signal/SET_EPISODE_DATA',
  INIT_BOOK: 'signal/INIT_BOOK',
  ASK_USER_SETTINGS: 'signal/ASK_USER_SETTINGS',
  SAVE_ANSWER: 'signal/SAVE_ANSWER'
};

// Action Creators

const next = () => ({ type: types.NEXT });
const nextSentence = () => ({ type: types.NEXT_SENTENCE });
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
const exit = (seasonNumber, episodeNumber) => ({
  type: types.EXIT,
  payload: {
    seasonNumber,
    episodeNumber
  }
});
const fetchEpisodes = () => ({ type: types.FETCH_EPISODES });
const endDialog = () => ({ type: types.END_DIALOG });
const playAudio = (url, text) => ({
  type: types.PLAY_AUDIO,
  payload: { url, text }
});
const checkAnswer = () => ({ type: types.CHECK_ANSWER });
const createNewUser = payload => ({
  type: types.CREATE_NEW_USER,
  payload
});
const newUserCreated = attributes => ({
  type: types.NEW_USER_CREATED,
  meta: {
    analytics: [{
      eventType: EventTypes.identify,
      eventPayload: {
        userId: attributes.id,
        traits: {
          email: attributes.email,
          createdAt: attributes.createdAt,
          settings: attributes.settings
        }
      },
    }, {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'New user Created'
      }
    }]
  }
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
const initApp = isAuthenticated => ({
  type: types.INIT_APP,
  payload: { isAuthenticated }
});
const reloadApp = () => ({ type: types.RELOAD_APP });
const mapLinkClick = link => ({
  type: types.MAP_LINK_CLICK,
  payload: { link }
});
const dialogLinkClick = link => ({
  type: types.DIALOG_LINK_CLICK,
  payload: { link }
});
const videoEnded = src => ({
  type: types.VIDEO_ENDED,
  meta: {
    analytics: {
      eventType: EventTypes.track,
      eventPayload: {
        event: 'Video Ended',
        properties: {
          src
        }
      }
    }
  }
});
const nextScreen = shouldUrlBeSkipped => ({
  type: types.NEXT_SCREEN,
  payload: { shouldUrlBeSkipped }
});
const practiceCompleted = () => ({
  type: types.PRACTICE_COMPLETED
});
const startEpisode = (seasonNumber, episodeNumber) => ({
  type: types.START_EPISODE,
  payload: { seasonNumber, episodeNumber }
});
const runEpisodeScreen = url => ({
  type: types.RUN_EPISODE_SCREEN,
  payload: { url }
});
const unmountEpisodeScreen = () => ({
  type: types.UNMOUNT_EPISODE_SCREEN
});
const strokeAnimationFinished = animationId => ({
  type: types.STROKE_ANIMATION_FINISHED,
  payload: { animationId }
});
const strokeQuizCompleted = () => ({
  type: types.STROKE_QUIZ_COMPLETED
});
const startRoleplay = () => ({
  type: types.START_ROLEPLAY
});
const pause = () => ({ type: types.PAUSE });
const examCompleted = data => {
  return {
    type: types.EXAM_COMPLETED,
    meta: {
      analytics: {
        eventType: EventTypes.track,
        eventPayload: {
          event: 'Exam Completed',
          properties: {
            seasonId: data.seasonId,
            seasonNumber: data.seasonNumber,
            episodeId: data.episodeId,
            episodeNumber: data.episodeNumber,
            score: data.score,
            timeLeft: data.timeLeft,
            exercises: data.exercises.toJS(),
            results: data.results.toJS()
          }
        }
      }
    }
  };
};
const playSuccessSound = () => ({ type: types.PLAY_SUCCESS_SOUND });
const playWrongSound = () => ({ type: types.PLAY_WRONG_SOUND });
const playLevelWinSound = () => ({ type: types.PLAY_LEVEL_WIN_SOUND });
const playLevelFailSound = () => ({ type: types.PLAY_LEVEL_FAIL_SOUND });
const nextQuestion = () => ({ type: types.NEXT_QUESTION });
const questionAnswered = answer => ({
  type: types.QUESTION_ANSWERED,
  payload: { answer }
});

const newWordLinkClicked = id => ({
  type: types.NEW_WORD_LINK_CLICKED,
  payload: {id}
});

const setEpisodeData = episodeId => ({
  type: types.SET_EPISODE_DATA,
  payload: { id: episodeId }
});

const initBook = (seasonNumber, episodeNumber) => ({
  type: types.INIT_BOOK,
  payload: { seasonNumber, episodeNumber }
});

const askUserSettings = () => ({
  type: types.ASK_USER_SETTINGS
});

const saveAnswer = answer => ({
  type: types.SAVE_ANSWER,
  payload: { answer }
});

export const actions = {
  next,
  nextSentence,
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
  newUserCreated,
  loginRequest,
  loginError,
  logout,
  sendFeedback,
  activate,
  initApp,
  reloadApp,
  mapLinkClick,
  dialogLinkClick,
  videoEnded,
  nextScreen,
  practiceCompleted,
  startEpisode,
  runEpisodeScreen,
  unmountEpisodeScreen,
  strokeAnimationFinished,
  strokeQuizCompleted,
  startRoleplay,
  pause,
  examCompleted,
  playSuccessSound,
  playWrongSound,
  playLevelWinSound,
  playLevelFailSound,
  nextQuestion,
  questionAnswered,
  newWordLinkClicked,
  setEpisodeData,
  initBook,
  askUserSettings,
  saveAnswer
};
