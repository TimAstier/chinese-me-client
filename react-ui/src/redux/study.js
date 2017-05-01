import { fromJS } from 'immutable';
import { Api } from '../helpers/api';

const api = new Api();

// Action Types
export const types = {
  SET_FROM_URL: 'study/SET_FROM_URL',
  SET_CURRENT_RESOURCE: 'study/SET_CURRENT_RESOURCE'
};

// Reducer

export const INITIAL_STATE = fromJS({
  lessonId: '',
  resourceId: '',
  resourceType: ''
});

function reduceSet(state, action) {
  return state.merge({ ...action.data });
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET_FROM_URL:
    case types.SET_CURRENT_RESOURCE: return reduceSet(state, action);
    default: return state;
  }
}

// Action Creators

export const setStudyFromUrl = studyUrl => {
  const splitUrl = studyUrl.split('/');
  return {
    type: types.SET_FROM_URL,
    data: {
      lessonId: splitUrl[1],
      resourceId: splitUrl[3],
      resourceType: splitUrl[2]
    }
  };
};

export const setCurrentResource = (resourceId, resourceType) => {
  return {
    type: types.SET_CURRENT_RESOURCE,
    data: {
      resourceId,
      resourceType
    }
  };
};

export const fetchStudyUrl = userId => {
  return api.get(`/users/${userId}/studyUrl`);
};

// Selectors

const duckState = state => state.get('study');

export const selectors = {
  getLessonId: state => duckState(state).get('lessonId'),
  getResourceId: state => duckState(state).get('resourceId'),
  getResourceType: state => duckState(state).get('resourceType')
};
