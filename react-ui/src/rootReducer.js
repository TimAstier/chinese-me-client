import { combineReducers } from 'redux-immutable';
import * as reducers from './redux';

export default combineReducers(reducers);

// TODO: export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers
// Note: currently doing this in redux files
