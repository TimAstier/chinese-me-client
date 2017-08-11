// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import { createSelector } from 'reselect';
import bindSelectors from './utils/bindSelectors';
import * as fromEntities from './redux/entities';
import * as fromStudy from './redux/study';
import * as fromUi from './redux/ui';
import * as fromAudio from './redux/audio';
import * as fromCharacterPinyin from './redux/characterPinyin';
import * as fromAuth from './redux/auth';

const entitySelectors = bindSelectors(
  state => state.get('entities'),
  fromEntities.selectors
);

const studySelectors = bindSelectors(
  state => state.get('study'),
  fromStudy.selectors
);

const uiSelectors = bindSelectors(
  state => state.get('ui'),
  fromUi.selectors
);

const audioSelectors = bindSelectors(
  state => state.get('audio'),
  fromAudio.selectors
);

const characterPinyinSelectors = bindSelectors(
  state => state.get('characterPinyin'),
  fromCharacterPinyin.selectors
);

const authPinyinSelectors = bindSelectors(
  state => state.get('auth'),
  fromAuth.selectors
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

const getCurrentEpisode = createSelector(
  entitySelectors.getEpisodes,
  studySelectors.getCurrentEpisodeId,
  (episodes, id) => episodes.get(String(id))
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
  (statement, i) => {
    return statement.sentences[i + 1] ? statement.sentences[i + 1] : undefined;
  }
);

const getPreviousSentenceId = createSelector(
  getCurrentStatement,
  getCurrentSentenceIndex,
  (statement, i) => statement.sentences[i - 1]
);

const getNextStatementId = createSelector(
  getCurrentDialog,
  getCurrentStatementIndex,
  (dialog, i) => dialog.statements[i + 1] ? dialog.statements[i + 1] : undefined
);

const getSentencesCountInCurrentDialog = createSelector(
  getCurrentDialog,
  entitySelectors.getStatements,
  (dialog, statements) => {
    let count = 0;
    dialog.statements.forEach(statementId => {
      count = count + statements.get(String(statementId)).sentences.length;
    });
    return count;
  }
);

const getIsChosenAvatarTalking = createSelector(
  studySelectors.getChosenAvatarId,
  entitySelectors.getAvatars,
  (id, avatars) => {
    if (id && avatars.get(String(id))) {
      return avatars.get(String(id)).isTalking;
    }
    return false;
  }
);

const getCurrentCharacter = createSelector(
  entitySelectors.getCharacters,
  studySelectors.getCurrentCharacterId,
  (characters, id) => {
    if (characters.get(String(id))) {
      return characters.get(String(id));
    }
    return undefined;
  }
);

const getCurrentCharacterPosition = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentCharacterId,
  (episode, id) => {
    if (episode) {
      return episode.characters.findIndex(c => c === id) + 1;
    }
    return 0;
  }
);

// for EpisodeScreen

const getCharactersNavParams = createSelector(
  getCurrentEpisode,
  getCurrentCharacterPosition,
  (currentEpisode, currentCharacterPosition) => {
    const charactersCount = currentEpisode.characters.length;
    return {
      type: 'character',
      currentElement: currentCharacterPosition,
      totalElements: charactersCount
    };
  }
);

// TODO: link this to actual data
const getDialogsNavParams = () => ({
  type: 'dialog',
  currentElement: 1,
  totalElements: 2
});

const selectors = {
  ...entitySelectors,
  ...studySelectors,
  ...uiSelectors,
  ...audioSelectors,
  ...characterPinyinSelectors,
  ...authPinyinSelectors,
  getCurrentEpisode,
  getCurrentDialog,
  getCurrentStatement,
  getCurrentStatementIndex,
  getCurrentSentence,
  getCurrentSentenceIndex,
  getCurrentSentences,
  getCurrentAvatars,
  getNextSentenceId,
  getPreviousSentenceId,
  getNextStatementId,
  getSentencesCountInCurrentDialog,
  getIsChosenAvatarTalking,
  getCurrentCharacter,
  getCurrentCharacterPosition,
  getCharactersNavParams,
  getDialogsNavParams
};

export default selectors;
