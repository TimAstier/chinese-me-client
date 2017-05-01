import { fromJS } from 'immutable';
import { Api } from '../helpers/api';

const api = new Api();

// Action Types
export const types = {
  SET: 'STUDY/SET'
};

// Reducer

export const INITIAL_STATE = fromJS({
  lessonId: '',
  resourceId: '',
  resourceType: ''
});

function reduceSet(state, action) {
  const { lessonId, resourceId, resourceType } = action.data;
  return state.merge({ lessonId, resourceId, resourceType });
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.SET: return reduceSet(state, action);
    default: return state;
  }
}

// Action Creators

export const setStudy = studyUrl => {
  const splitUrl = studyUrl.split('/');
  return {
    type: types.SET,
    data: {
      lessonId: splitUrl[1],
      resourceId: splitUrl[3],
      resourceType: splitUrl[2]
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
