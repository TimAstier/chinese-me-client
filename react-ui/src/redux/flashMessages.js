import findIndex from 'lodash/findIndex';
import { List } from 'immutable';
import shortid from 'shortid';

// Action Types
export const types = {
  ADD: 'FLASH_MESSAGES/ADD',
  DELETE: 'FLASH_MESSAGES/DELETE'
};

// Reducer
export const INITIAL_STATE = List();

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.ADD:
      return state.push({
        type: action.message.type,
        text: action.message.text,
        // id is generated in the action creator to keep this function pure
        id: action.message.id
      });
    case types.DELETE:
      const index = findIndex(state.toJS(), { id: action.id });
      if (index >= 0) {
        return state.delete(index);
      }
      return state;
    default:
      return state;
  }
}

// Action Creators
export function addFlashMessage(message, id = shortid.generate()) {
  return {
    type: types.ADD,
    message: {
      type: message.type,
      text: message.text,
      id
    }
  };
}

export function deleteFlashMessage(id) {
  return {
    type: types.DELETE,
    id
  };
}

// Based on: http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout
// Can use this to test: https://facebook.github.io/jest/docs/timer-mocks.html
export function showFlashMessageWithTimeout(message, duration = 5000) {
  const id = shortid.generate();
  return dispatch => {
    dispatch(addFlashMessage(message, id));
    setTimeout(() => {
      dispatch(deleteFlashMessage(id));
    }, duration);
  };
}

// Selectors
export const getMessages = state => state.get('flashMessages');
