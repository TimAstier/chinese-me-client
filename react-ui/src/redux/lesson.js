import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { apiCall, Api } from '../helpers/api';
import LessonDeserializer from '../utils/deserializers/lesson';

const api = new Api();

// Action Types
export const types = {
  SET: 'LESSONS/SET',
  FETCH_REQUEST: 'LESSONS/FETCH_REQUEST',
  FETCH_SUCCESS: 'LESSONS/FETCH_SUCCESS',
  FETCH_FAIL: 'LESSONS/FETCH_FAIL',
  SET_CURRENT_RESOURCE: 'LESSONS/SET_CURRENT_RESOURCE',
  COMPLETE_REQUEST: 'LESSONS/COMPLETE_REQUEST',
  COMPLETE_SUCCESS: 'LESSONS/COMPLETE_SUCCESS',
  COMPLETE_FAIL: 'LESSONS/COMPLETE_FAIL'
};

// Reducer
export const INITIAL_STATE = fromJS({
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
    case types.SET:
      return state.merge(fromJS({
        id: action.data.id,
        title: action.data.title,
        dialogsData: action.data.dialogsData,
        charsData: action.data.charsData,
        grammarsData: action.data.grammarsData
      }));
    case types.FETCH_REQUEST:
      return state.set('isFetching', true);
    case types.FETCH_SUCCESS:
    case types.FETCH_FAIL:
      return state.set('isFetching', false);
    case types.SET_CURRENT_RESOURCE:
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
    type: types.SET,
    data
  };
}

function fetch(lessonId) {
  return dispatch => {
    dispatch({ type: types.FETCH_REQUEST });
    return api.get(`/lesson/${lessonId}`);
  };
}

function fetchSuccess(data) {
  return dispatch => {
    dispatch({ type: types.FETCH_SUCCESS });
    return dispatch(set(LessonDeserializer(data)));
  };
}

function fetchFail() {
  return { type: types.FETCH_FAIL };
}

function complete(data) {
  const { userId } = data;
  return dispatch => {
    dispatch({ type: types.COMPLETE_REQUEST });
    return api.post(`/users/${userId}/completed`, data);
  };
}

function completeSuccess() {
  // console.log(data);
  return { type: types.COMPLETE_SUCCESS };
}

function completeFail() {
  return { type: types.COMPLETE_FAIL };
}

const getFuncs = [fetch, fetchSuccess, fetchFail];
const completeResourceFuncs = [complete, completeSuccess, completeFail];

export const actions = {
  getLesson: data => apiCall(data, ...getFuncs),
  completeResource: data => apiCall(data, ...completeResourceFuncs),
  setCurrentResource: data => ({ type: types.SET_CURRENT_RESOURCE, data })
};

// Selectors
const duckState = state => state.get('lesson');
const getCharsData = state => duckState(state).get('charsData');
const getDialogsData = state => duckState(state).get('dialogsData');
const getGrammarsData = state => duckState(state).get('grammarsData');
export const getCurrentResourceId = state => duckState(state).get('currentResourceId');
export const getCurrentResourceType = state => duckState(state).get('currentResourceType');
export const getLessonId = state => duckState(state).get('id');
export const getTitle = state => duckState(state).get('title');


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
