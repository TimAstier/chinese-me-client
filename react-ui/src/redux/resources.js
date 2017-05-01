import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { apiCall, Api } from '../helpers/api';
import isEmpty from 'lodash/isEmpty';
import { selectors as studySelectors, setStudyFromUrl } from './study';

const api = new Api();

// Action Types
export const types = {
  SET: 'resources/SET',
  COMPLETE_REQUEST: 'resources/COMPLETE_REQUEST',
  COMPLETE_SUCCESS: 'resources/COMPLETE_SUCCESS',
  COMPLETE_FAIL: 'resources/COMPLETE_FAIL',
  UPDATE_COMPLETE_STATUS: 'resources/UPDATE_COMPLETE_STATUS'
};

// Reducer
export const INITIAL_STATE = fromJS({
  dialogsData: [],
  charsData: [],
  grammarsData: [],
  wordsData: [],
});

function reduceSet(state, action) {
  return state.merge(fromJS({
    dialogsData: action.data.dialogsData,
    charsData: action.data.charsData,
    grammarsData: action.data.grammarsData,
    wordsData: action.data.wordsData
  }));
}

function reduceCompleteSuccess(state, action) {
  if (action.data === null) {
    return state;
  }
  const name = `${action.data.resourceType}sData`;
  let resourcesData = state.get(name);
  resourcesData = resourcesData.update(
    resourcesData.findIndex(e => {
      return e.get('id') === action.data.resourceId;
    }),
    resource => resource.set('completed', true)
  );
  return state.set(name, resourcesData);
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET: return reduceSet(state, action);
    case types.COMPLETE_SUCCESS: return reduceCompleteSuccess(state, action);
    default: return state;
  }
}

// Action Creators

export const setResources = data => ({ type: types.SET, data });

function complete(data) {
  const { lessonId } = data;
  return dispatch => {
    dispatch({ type: types.COMPLETE_REQUEST });
    return api.post(`/lesson/${lessonId}/completed`, data);
  };
}

function completeSuccess(data) {
  return dispatch => {
    if (!isEmpty(data)) {
      const { resourceType, studyUrl } = data;
      const resourceId = data[`${resourceType}Id`].toString();
      dispatch(setStudyFromUrl(studyUrl));
      return dispatch({
        type: types.COMPLETE_SUCCESS,
        data: {
          resourceType,
          resourceId
        }
      });
    }
    return dispatch({ type: types.COMPLETE_SUCCESS, data: null });
  };
}

function completeFail() {
  return { type: types.COMPLETE_FAIL };
}

const completeResourceFuncs = [complete, completeSuccess, completeFail];
export const completeResource = data => apiCall(data, ...completeResourceFuncs);

// Selectors
const duckState = state => state.get('resources');
const getCharsData = state => duckState(state).get('charsData');
const getDialogsData = state => duckState(state).get('dialogsData');
const getGrammarsData = state => duckState(state).get('grammarsData');
const getWordsData = state => duckState(state).get('wordsData');

// Memoized Selectors
const getCharCount = createSelector(
  getCharsData,
  charsData => charsData.size
);

const getCompletedCharCount = createSelector(
  getCharsData,
  charsData => charsData.filter(e => e.get('completed')).size
);

const getGrammarCount = createSelector(
  getGrammarsData,
  grammarsData => grammarsData.size
);

const getCompletedGrammarCount = createSelector(
  getGrammarsData,
  grammarsData => grammarsData.filter(e => e.get('completed')).size
);

const getDialogCount = createSelector(
  getDialogsData,
  dialogsData => dialogsData.size
);

const getCompletedDialogCount = createSelector(
  getDialogsData,
  dialogsData => dialogsData.filter(e => e.get('completed')).size
);

const getWordCount = createSelector(
  getWordsData,
  wordsData => wordsData.size
);

const getCompletedWordCount = createSelector(
  getWordsData,
  wordsData => wordsData.filter(e => e.get('completed')).size
);

const getResourceData = createSelector(
  [studySelectors.getResourceType, getCharsData, getDialogsData, getGrammarsData, getWordsData],
  (resourceType, charsData, dialogsData, grammarsData, wordsData) => {
    switch (resourceType) {
      case 'char':
        return charsData;
      case 'dialog':
        return dialogsData;
      case 'grammar':
        return grammarsData;
      case 'word':
        return wordsData;
      default:
        return fromJS([]);
    }
  }
);

const getComment = createSelector(
  studySelectors.getResourceId,
  getResourceData,
  (resourceId, resourceData) => {
    const index = resourceData.findIndex(e => e.get('id') === resourceId);
    const resource = resourceData.get(index);
    if (resource !== undefined) {
      const comment = resource.get('comment');
      if (comment === null) {
        return '';
      }
      return comment;
    }
    return '';
  }
);

const getCompleted = createSelector(
  studySelectors.getResourceId,
  getResourceData,
  (resourceId, resourceData) => {
    const index = resourceData.findIndex(e => e.get('id') === resourceId);
    const resource = resourceData.get(index);
    if (resource !== undefined) {
      return resource.get('completed');
    }
    return false;
  }
);

const getTypedResources = createSelector(
  [getCharsData, getDialogsData, getGrammarsData, getWordsData],
  (charsData, dialogsData, grammarsData, wordsData) => {
    const grammarsWithType = grammarsData.map(e => e.set('type', 'grammar'));
    const dialogsWithType = dialogsData.map(e => e.set('type', 'dialog'));
    const charsWithType = charsData.map(e => e.set('type', 'char'));
    const wordsWithType = wordsData.map(e => e.set('type', 'word'));
    return grammarsWithType
      .concat(dialogsWithType)
      .concat(charsWithType)
      .concat(wordsWithType);
  }
);

const getNextResource = createSelector(
  studySelectors.getResourceType,
  studySelectors.getResourceId,
  getTypedResources,
  (resourceType, resourceId, typedResources) => {
    if (resourceType === null) {
      return {};
    }
    // console.log(typedResources.toJS());
    const resourceCount = typedResources.size;
    const index =  typedResources.findIndex(e => {
      return (e.get('type') === resourceType && e.get('id') === resourceId);
    });
    if (index + 1 === resourceCount) {
      return { type: 'end' };
    }
    const nextResource = typedResources.get(index + 1);
    return { type: nextResource.get('type'), id: nextResource.get('id') };
  }
);

// TODO: Do something less ugly
const getFirstOfEachType = createSelector(
  [getCharsData, getDialogsData, getGrammarsData, getWordsData],
  (charsData, dialogsData, grammarsData, wordsData) => {
    const char = charsData.size !== 0 ? charsData.get(0) : null;
    const word = wordsData.size !== 0 ? wordsData.get(0) : null;
    const grammar = grammarsData.size !== 0 ? grammarsData.get(0) : null;
    const dialog = dialogsData.size !== 0 ? dialogsData.get(0) : null;
    return { char, word, grammar, dialog };
  }
);

// Export selectors
export const selectors = {
  getCharCount,
  getCompletedCharCount,
  getGrammarCount,
  getCompletedGrammarCount,
  getDialogCount,
  getCompletedDialogCount,
  getWordCount,
  getCompletedWordCount,
  getComment,
  getCompleted,
  getNextResource,
  getFirstOfEachType
};
