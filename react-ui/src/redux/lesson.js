import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { apiCall, Api } from '../helpers/api';
import LessonDeserializer from '../utils/deserializers/lesson';

const api = new Api();

// Action Types
const SET = 'chinese-me/lessons/SET';
const FETCH = 'chinese-me/lessons/FETCH';
const FETCH_SUCCESS = 'chinese-me/lessons/FETCH_SUCCESS';
const FETCH_FAIL = 'chinese-me/lessons/FETCH_FAIL';
const SET_CURRENT_RESOURCE = 'chinese-me/lessons/SET_CURRENT_RESOURCE';
const COMPLETE = 'chinese-me/lessons/COMPLETE';
const COMPLETE_SUCCESS = 'chinese-me/lessons/COMPLETE_SUCCESS';
const COMPLETE_FAIL = 'chinese-me/lessons/COMPLETE_FAIL';

// Reducer
const INITIAL_STATE = fromJS({
  id: 0,
  title: '',
  currentResourceId: 0,
  currentResourceType: '',
  dialogsData: [],
  charsData: [],
  grammarsData: [],
  isFetching: false
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET:
      return state.merge(fromJS({
        id: action.data.id,
        title: action.data.title,
        dialogsData: action.data.dialogsData,
        charsData: action.data.charsData,
        grammarsData: action.data.grammarsData
      }));
    case FETCH:
      return state.set('isFetching', true);
    case FETCH_SUCCESS:
    case FETCH_FAIL:
      return state.set('isFetching', false);
    case SET_CURRENT_RESOURCE:
      return state.merge(fromJS({
        currentResourceId: action.data.resourceId,
        currentResourceType: action.data.resourceType
      }));
    default:
      return state;
  }
}

// Action Creators
function set(data) {
  return {
    type: SET,
    data
  };
}

function fetch(lessonId) {
  return dispatch => {
    dispatch({ type: FETCH });
    return api.get(`/lesson/${lessonId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: FETCH_SUCCESS });
    return dispatch(set(LessonDeserializer(data)));
  };
}

function fetchFail() {
  return { type: FETCH_FAIL };
}

export function get(data) {
  return apiCall(data, fetch, fetchSuccess, fetchFail);
}

export function setCurrentResource(data) {
  return {
    type: SET_CURRENT_RESOURCE,
    data
  };
}

function complete(data) {
  const { userId } = data;
  return dispatch => {
    dispatch({ type: COMPLETE });
    return api.post(`/users/${userId}/completed`, data);
  };
}

function completeSuccess() {
  // console.log(data);
  return { type: COMPLETE_SUCCESS };
}

function completeFail() {
  return { type: COMPLETE_FAIL };
}

export function completeResource(data) {
  return apiCall(data, complete, completeSuccess, completeFail);
}

// Selectors
const getCharsData = state => state.get('charsData');
const getDialogsData = state => state.get('dialogsData');
const getGrammarsData = state => state.get('grammarsData');
const getCurrentResourceId = state => state.get('currentResourceId');
const getCurrentResourceType = state => state.get('currentResourceType');

// Memoized Selectors
export const getCharCount = createSelector(
  getCharsData,
  charsData => charsData.size
);

export const getGrammarCount = createSelector(
  getGrammarsData,
  grammarsData => grammarsData.size
);

const getResourceData = createSelector(
  [getCurrentResourceType, getCharsData, getDialogsData, getGrammarsData],
  (resourceType, charsData, dialogsData, grammarsData) => {
    switch (resourceType) {
      case 'char':
        return charsData;
      case 'dialog':
        return dialogsData;
      case 'grammar':
        return grammarsData;
      default:
        return fromJS([]);
    }
  }
);

export const getComment = createSelector(
  getCurrentResourceId,
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

const getTypedResources = createSelector(
  [getCharsData, getDialogsData, getGrammarsData],
  (charsData, dialogsData, grammarsData) => {
    const grammarsWithType = grammarsData.map(e => e.set('type', 'grammar'));
    const dialogsWithType = dialogsData.map(e => e.set('type', 'dialog'));
    const charsWithType = charsData.map(e => e.set('type', 'char'));
    return grammarsWithType.concat(dialogsWithType).concat(charsWithType);
  }
);

export const getNextResource = createSelector(
  [getCurrentResourceId, getCurrentResourceType, getTypedResources],
  (id, type, typedResources) => {
    if (type === null) {
      return {};
    }
    // console.log(typedResources.toJS());
    const resourceCount = typedResources.size;
    const index =  typedResources.findIndex(e => {
      return (e.get('type') === type && e.get('id') === id);
    });
    if (index + 1 === resourceCount) {
      return {type: 'end', id: 0 };
    }
    const nextResource = typedResources.get(index + 1);
    return { type: nextResource.get('type'), id: nextResource.get('id') };
  }
);
