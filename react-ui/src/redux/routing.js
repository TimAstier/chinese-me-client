// react-router-redux routeReducer does not work with Immutable.js.
// You need to use a custom reducer (https://github.com/gajus/redux-immutable)
import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { createSelector } from 'reselect';
import getParamsFromUrl from '../utils/getParamsFromUrl';

// Reducer

const INITIAL_STATE = Immutable.fromJS({
  locationBeforeTransitions: null
});

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }
  return state;
}

// Selectors

const getCurrentUrl = state => {
  if (state.get('locationBeforeTransitions')) {
    return state.get('locationBeforeTransitions').pathname;
  }
  return '';
};

const getCurrentScreenType = createSelector(
  getCurrentUrl,
  url => {
    const params = getParamsFromUrl(url); // Get params from url
    const screenType = params.elementType + '/' + params.mode; // Define screenType
    return screenType;
  }
);

const getElementType = createSelector(
  getCurrentUrl,
  url => url ? url.split('/')[3] : ''
);

export const selectors = {
  getCurrentUrl,
  getCurrentScreenType,
  getElementType
};
