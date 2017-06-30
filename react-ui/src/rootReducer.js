import { combineReducers } from 'redux-immutable';
import * as reducers from './redux';
import * as fromEpisodes from './redux/episodes';

export default combineReducers(reducers);

// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

export const getEpisodes = state => {
  return fromEpisodes.selectors.getEpisodes(state.get('episodes'));
};

export const getIsFetching = state => {
  return fromEpisodes.selectors.getIsFetching(state.get('isFetching'));
};
