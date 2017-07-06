import { combineReducers } from 'redux-immutable';
import * as duckReducers from './redux';
import * as fromEntities from './redux/entities';
import * as fromStudy from './redux/study';
import * as fromModels from './models';
import createEntitiesReducer from './helpers/createEntitiesReducer';
import { createSelector } from 'reselect';

export default combineReducers({
  ...duckReducers,
  entities: createEntitiesReducer({ ...fromModels })
});

// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

// TODO: export all selectors in a selector object
// TODO: DRY the following selectors

export const getAvatars = state => {
  return fromEntities.selectors.getAvatars(state.get('entities'));
};

export const getEpisodes = state => {
  return fromEntities.selectors.getEpisodes(state.get('entities'));
};

export const getDialogs = state => {
  return fromEntities.selectors.getDialogs(state.get('entities'));
};

export const getStatements = state => {
  return fromEntities.selectors.getStatements(state.get('entities'));
};

export const getSentences = state => {
  return fromEntities.selectors.getSentences(state.get('entities'));
};

export const getCurrentEpisodeId = state =>
  fromStudy.selectors.getCurrentEpisodeId(state.get('study'));

export const getCurrentDialogId = state =>
  fromStudy.selectors.getCurrentDialogId(state.get('study'));

export const getCurrentStatementId = state =>
  fromStudy.selectors.getCurrentStatementId(state.get('study'));

export const getCurrentSentenceId = state =>
  fromStudy.selectors.getCurrentSentenceId(state.get('study'));

export const getCurrentDialog = createSelector(
  getDialogs,
  getCurrentDialogId,
  (dialogs, id) => {
    if (dialogs.get(String(id))) {
      return dialogs.get(String(id));
    }
    return undefined;
  }
);

export const getCurrentStatementIndex = createSelector(
  getCurrentDialog,
  getCurrentStatementId,
  (dialog, id) => {
    if (dialog) {
      return dialog.statements.findIndex(s => s === id);
    }
    return 0;
  }
);

export const getCurrentStatement = createSelector(
  getStatements,
  getCurrentStatementId,
  (statements, id) => statements.get(String(id))
);

export const getCurrentSentence = createSelector(
  getSentences,
  getCurrentSentenceId,
  (sentences, id) => sentences.get(String(id))
);

export const getCurrentSentenceIndex = createSelector(
  getCurrentStatement,
  getCurrentSentenceId,
  (statement, id) => {
    if (statement) {
      return statement.sentences.findIndex(s => s === id);
    }
    return 0;
  }
);

export const getCurrentSentences = createSelector(
  getCurrentStatement,
  getSentences,
  (statement, sentences) => {
    const arrayOfSentences = [];
    if (statement && sentences) {
      statement.sentences.forEach(s => {
        arrayOfSentences.push(sentences.get(String(s)));
      });
    }
    return arrayOfSentences;
  }
);

export const getCurrentAvatars = createSelector(
  getCurrentDialog,
  getAvatars,
  (dialog, avatars) => {
    const arrayOfAvatars = [];
    if (dialog && avatars) {
      dialog.avatars.forEach(a => {
        arrayOfAvatars.push(avatars.get(String(a)));
      });
    }
    return arrayOfAvatars;
  }
);
