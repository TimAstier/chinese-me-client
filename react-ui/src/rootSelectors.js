// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import { createSelector } from 'reselect';
import bindSelectors from './utils/bindSelectors';
import * as fromEntities from './redux/entities';
import * as fromStudy from './redux/study';

const entitySelectors = bindSelectors(
  state => state.get('entities'),
  fromEntities.selectors
);

const studySelectors = bindSelectors(
  state => state.get('study'),
  fromStudy.selectors
);

const getCurrentDialog = createSelector(
  entitySelectors.getDialogs,
  studySelectors.getCurrentDialogId,
  (dialogs, id) => {
    if (dialogs.get(String(id))) {
      return dialogs.get(String(id));
    }
    return undefined;
  }
);

const getCurrentStatementIndex = createSelector(
  getCurrentDialog,
  studySelectors.getCurrentStatementId,
  (dialog, id) => {
    if (dialog) {
      return dialog.statements.findIndex(s => s === id);
    }
    return 0;
  }
);

const getCurrentStatement = createSelector(
  entitySelectors.getStatements,
  studySelectors.getCurrentStatementId,
  (statements, id) => statements.get(String(id))
);

const getCurrentSentence = createSelector(
  entitySelectors.getSentences,
  studySelectors.getCurrentSentenceId,
  (sentences, id) => sentences.get(String(id))
);

const getCurrentSentenceIndex = createSelector(
  getCurrentStatement,
  studySelectors.getCurrentSentenceId,
  (statement, id) => {
    if (statement) {
      return statement.sentences.findIndex(s => s === id);
    }
    return 0;
  }
);

const getCurrentSentences = createSelector(
  getCurrentStatement,
  entitySelectors.getSentences,
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

const getCurrentAvatars = createSelector(
  getCurrentDialog,
  entitySelectors.getAvatars,
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

const getNextSentenceId = createSelector(
  getCurrentStatement,
  getCurrentSentenceIndex,
  (statement, i) => statement.sentences[i + 1]
);

const getPreviousSentenceId = createSelector(
  getCurrentStatement,
  getCurrentSentenceIndex,
  (statement, i) => statement.sentences[i - 1]
);

const selectors = {
  ...entitySelectors,
  ...studySelectors,
  getCurrentDialog,
  getCurrentStatement,
  getCurrentStatementIndex,
  getCurrentSentence,
  getCurrentSentenceIndex,
  getCurrentSentences,
  getCurrentAvatars,
  getNextSentenceId,
  getPreviousSentenceId
};

export default selectors;
