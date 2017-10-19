// Export selectors with a slice of the state to use in components
// This avoids having to change components if selectors implementation is changed
// See https://egghead.io/lessons/javascript-redux-colocating-selectors-with-reducers

import { createSelector } from 'reselect';
import bindSelectors from './utils/bindSelectors';
import * as fromEntities from './redux/entities';
import * as fromStudy from './redux/study';
import * as fromUi from './redux/ui';
import * as fromAudio from './redux/audio';
import * as fromAudioToText from './redux/audioToText';
import * as fromCharacterPinyin from './redux/characterPinyin';
import * as fromAuth from './redux/auth';
import * as fromExam from './redux/exam';
import * as fromReview from './redux/review';
import * as fromRouting from './redux/routing';
import * as fromMap from './redux/map';
import * as fromMultipleChoice from './redux/multipleChoice';
import * as fromVideo from './redux/video';
import * as fromTimer from './redux/timer';
import * as fromSettings from './redux/settings';

// TODO: DRY selectors (like getNext/Previous ids)

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

const audioToTextSelectors = bindSelectors(
  state => state.get('audioToText'),
  fromAudioToText.selectors
);

const characterPinyinSelectors = bindSelectors(
  state => state.get('characterPinyin'),
  fromCharacterPinyin.selectors
);

const authPinyinSelectors = bindSelectors(
  state => state.get('auth'),
  fromAuth.selectors
);

const reviewSelectors = bindSelectors(
  state => state.get('review'),
  fromReview.selectors
);

const routingSelectors = bindSelectors(
  state => state.get('routing'),
  fromRouting.selectors
);

const mapSelectors = bindSelectors(
  state => state.get('map'),
  fromMap.selectors
);

const multipleChoiceSelectors = bindSelectors(
  state => state.get('multipleChoice'),
  fromMultipleChoice.selectors
);

const videoSelectors = bindSelectors(
  state => state.get('video'),
  fromVideo.selectors
);

const examSelectors = bindSelectors(
  state => state.get('exam'),
  fromExam.selectors
);

const timerSelectors = bindSelectors(
  state => state.get('timer'),
  fromTimer.selectors
);

const settingsSelectors = bindSelectors(
  state => state.get('settings'),
  fromSettings.selectors
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

const getCurrentDialogStatementsCount = createSelector(
  getCurrentDialog,
  dialog => dialog.countStatements()
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

const getFocusedEpisode = createSelector(
  entitySelectors.getEpisodes,
  mapSelectors.getFocusedEpisodeId,
  (episodes, id) => {
    return episodes.get(String(id));
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

const getCurrentMultipleChoice = createSelector(
  entitySelectors.getMultipleChoices,
  studySelectors.getCurrentMultipleChoiceId,
  (multipleChoices, id) => multipleChoices.get(String(id))
);

const getCurrentAudioToText = createSelector(
  entitySelectors.getAudioToTexts,
  studySelectors.getCurrentAudioToTextId,
  (audioToTexts, id) => audioToTexts.get(String(id))
);

const getCurrentWord = createSelector(
  entitySelectors.getWords,
  studySelectors.getCurrentWordId,
  (words, id) => {
    if (words.get(String(id))) {
      return words.get(String(id));
    }
    return undefined;
  }
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

// TODO: get hasManyRelations
const getCurrentWords = createSelector(
  getCurrentDialog,
  entitySelectors.getWords,
  (dialog, words) => {
    const arrayOfWords = [];
    if (dialog && words) {
      dialog.words.forEach(w => {
        arrayOfWords.push(words.get(String(w)));
      });
    }
    return arrayOfWords;
  }
);

const getNextSentenceId = createSelector(
  getCurrentStatement,
  getCurrentSentenceIndex,
  (statement, i) => {
    return statement.sentences[i + 1] ? statement.sentences[i + 1] : undefined;
  }
);

// const getPreviousSentenceId = createSelector(
//   getCurrentStatement,
//   getCurrentSentenceIndex,
//   (statement, i) => statement.sentences[i - 1]
// );

const getNextStatementId = createSelector(
  getCurrentDialog,
  getCurrentStatementIndex,
  (dialog, i) => dialog.statements[i + 1] ? dialog.statements[i + 1] : undefined
);

const getPreviousStatementId = createSelector(
  getCurrentDialog,
  getCurrentStatementIndex,
  (dialog, i) => dialog.statements[i - 1] ? dialog.statements[i - 1] : undefined
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
      return episode.characters.findIndex(c => String(c) === id) + 1;
    }
    return 0;
  }
);

const getCharactersNavParams = createSelector(
  getCurrentEpisode,
  getCurrentCharacterPosition,
  (currentEpisode, currentCharacterPosition) => {
    try {
      const charactersCount = currentEpisode.characters.length;
      return {
        type: 'character',
        currentElement: currentCharacterPosition,
        totalElements: charactersCount
      };
    } catch (e) {
      return undefined;
    }
  }
);

const getCurrentDialogPosition = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentDialogId,
  (episode, id) => {
    if (episode) {
      return episode.dialogs.findIndex(c => String(c) === id) + 1;
    }
    return 0;
  }
);

const getDialogsNavParams = createSelector(
  getCurrentEpisode,
  getCurrentDialogPosition,
  (currentEpisode, currentDialogPosition) => {
    try {
      const dialogsCount = currentEpisode.dialogs.length;
      return {
        type: 'dialog',
        currentElement: currentDialogPosition,
        totalElements: dialogsCount
      };
    } catch (e) {
      return undefined;
    }
  }
);

const getNextCharacterId = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentCharacterId,
  (episode, id) => {
    if (episode) {
      const index = episode.characters.findIndex(c => c === Number(id));
      if (episode.characters[index + 1]) {
        return episode.characters[index + 1];
      }
      return undefined;
    }
    return undefined;
  }
);

const getNextDialogId = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentDialogId,
  (episode, id) => {
    if (episode) {
      const index = episode.dialogs.findIndex(c => c === Number(id));
      if (episode.dialogs[index + 1]) {
        return episode.dialogs[index + 1];
      }
      return undefined;
    }
    return undefined;
  }
);

const getNextGrammarId = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentGrammarId,
  (episode, id) => {
    if (episode) {
      const index = episode.grammars.findIndex(c => c === Number(id));
      if (episode.grammars[index + 1]) {
        return episode.grammars[index + 1];
      }
      return undefined;
    }
    return undefined;
  }
);

const getPreviousCharacterId = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentCharacterId,
  (episode, id) => {
    if (episode) {
      const index = episode.characters.findIndex(c => c === Number(id));
      if (episode.characters[index - 1]) {
        return episode.characters[index - 1];
      }
      return undefined;
    }
    return undefined;
  }
);

const getPreviousDialogId = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentDialogId,
  (episode, id) => {
    if (episode) {
      const index = episode.dialogs.findIndex(c => c === Number(id));
      if (episode.dialogs[index - 1]) {
        return episode.dialogs[index - 1];
      }
      return undefined;
    }
    return undefined;
  }
);

const getPreviousGrammarId = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentGrammarId,
  (episode, id) => {
    if (episode) {
      const index = episode.grammars.findIndex(c => c === Number(id));
      if (episode.grammars[index - 1]) {
        return episode.grammars[index - 1];
      }
      return undefined;
    }
    return undefined;
  }
);

const getCurrentGrammar = createSelector(
  entitySelectors.getGrammars,
  studySelectors.getCurrentGrammarId,
  (grammars, id) => {
    if (grammars.get(String(id))) {
      return grammars.get(String(id));
    }
    return undefined;
  }
);

const getCurrentGrammarPosition = createSelector(
  getCurrentEpisode,
  studySelectors.getCurrentGrammarId,
  (episode, id) => {
    if (episode) {
      return episode.grammars.findIndex(c => String(c) === id) + 1;
    }
    return 0;
  }
);

const getGrammarsNavParams = createSelector(
  getCurrentEpisode,
  getCurrentGrammarPosition,
  (currentEpisode, currentGrammarPosition) => {
    try {
      const grammarsCount = currentEpisode.grammars.length;
      return {
        type: 'grammar',
        currentElement: currentGrammarPosition,
        totalElements: grammarsCount
      };
    } catch (e) {
      return undefined;
    }
  }
);

// Any screenType completed
const getMapCharactersCompletedCount = createSelector(
  mapSelectors.getMapCharacters,
  characters => {
    return characters.filter(c => c.get('userCharacters').size !== 0).size;
  }
);

const getMapDialogsCompletedCount = createSelector(
  mapSelectors.getMapDialogs,
  dialogs => {
    return dialogs.filter(d => d.get('userDialogs').size !== 0).size;
  }
);

const getMapGrammarsCompletedCount = createSelector(
  mapSelectors.getMapGrammars,
  grammars => {
    return grammars.filter(c => c.get('userGrammars').size !== 0).size;
  }
);

// Count screenTypes individually
const getMapCharactersCompletedDeepCount = createSelector(
  mapSelectors.getMapCharacters,
  characters => {
    let count = 0;
    characters.forEach(c => {
      if (c.get('userCharacters').size !== 0) {
        if (c.getIn(['userCharacters', 0, 'pinyin']) !== 0) {
          count++;
        }
        if (c.getIn(['userCharacters', 0, 'etymology']) !== 0) {
          count++;
        }
        if (c.getIn(['userCharacters', 0, 'writing']) !== 0) {
          count++;
        }
      }
    });
    return count;
  }
);

const getMapDialogsCompletedDeepCount = createSelector(
  mapSelectors.getMapDialogs,
  dialogs => {
    let count = 0;
    dialogs.forEach(d => {
      if (d.get('userDialogs').size !== 0) {
        if (d.getIn(['userDialogs', 0, 'listen']) !== 0) {
          count++;
        }
        if (d.getIn(['userDialogs', 0, 'explore']) !== 0) {
          count++;
        }
        if (d.getIn(['userDialogs', 0, 'roleplay']) !== 0) {
          count++;
        }
      }
    });
    return count;
  }
);

const getCurrentCharactersCount = createSelector(
  getCurrentEpisode,
  episode => {
    if (!episode) {
      return undefined;
    }
    return episode.characters.length;
  }
);

const getCurrentDialogsCount = createSelector(
  getCurrentEpisode,
  episode => {
    if (!episode) {
      return undefined;
    }
    return episode.dialogs.length;
  }
);

const getCurrentGrammarsCount = createSelector(
  getCurrentEpisode,
  episode => {
    if (!episode) {
      return undefined;
    }
    return episode.grammars.length;
  }
);


const getCompletionPercentage = createSelector(
  getCurrentEpisode,
  getMapCharactersCompletedDeepCount,
  getMapDialogsCompletedDeepCount,
  getMapGrammarsCompletedCount,
  getCurrentCharactersCount,
  getCurrentDialogsCount,
  getCurrentGrammarsCount,
  (episode, completeC, completeD, completeG, totalC, totalD, totalG) => {
    if (!episode) {
      return undefined;
    }
    const review = episode.get('review') ? 1 : 0;
    const ratioC = totalC ? completeC / (totalC * 3) : 0;
    const ratioG = totalG ? completeG / totalG : 0;
    const ratioD = totalD ? completeD / (totalD * 3) : 0; // Estimate Dialogs to take more time
    const result = Math.round((ratioC + ratioG + ratioD * 2 + review * 2) / 6 * 100);
    return result ? result : 0;
  }
);

const getReviewNavParams = createSelector(
  studySelectors.getCurrentEpisodeId,
  reviewSelectors.getReviewExercises,
  (episodeId, reviewExercises) => {
    try {
      return {
        type: 'exercise',
        currentElement: null,
        totalElements: reviewExercises.size,
      };
    } catch (e) {
      return undefined;
    }
  }
);

const getExamNavParams = createSelector(
  examSelectors.getExamScoreMax,
  examSelectors.getExamCurrentExerciseIndex,
  (scoreMax, index) => {
    try {
      return {
        type: 'question',
        currentElement: index + 1,
        totalElements: scoreMax,
      };
    } catch (e) {
      return undefined;
    }
  }
);

const getCurrentSeasonEpisodes = createSelector(
  entitySelectors.getEpisodes,
  studySelectors.getCurrentSeasonId,
  (episodes, seasonId) => {
    const result = episodes
      .filter(e => e.seasonId === Number(seasonId))
      .sortBy(item => item.number);
    return result;
  }
);

const getCurrentSeason = createSelector(
  studySelectors.getCurrentSeasonId,
  entitySelectors.getSeasons,
  (id, seasons) => {
    if (!id || !seasons) {
      return undefined;
    }
    return seasons.get(String(id)) ? seasons.get(String(id)) : undefined;
  }
);

const getFirstSeasonId = createSelector(
  entitySelectors.getSeasons,
  seasons => {
    let minNumber = 9999; // Should be lower than the number of seasons :)
    let id = null;
    seasons
      .entrySeq()
      .forEach(e => {
        if (e[1].number < minNumber) {
          minNumber = e[1].number;
          id = e[0];
        }
      });
    return id;
  }
);

const getCharacterPinyinHints = createSelector(
  getCurrentCharacter,
  characterPinyinSelectors.getCharacterPinyinAttemptsLeft,
  characterPinyinSelectors.getCharacterPinyinUserAnswer,
  (character, attemptsLeft, userAnswer) => {
    const finalSentence = attemptsLeft => {
      return attemptsLeft === 2 ?
        'You have two more tries.'
        : 'You have one last try.';
    };
    const expectedAnswer = character.get('pinyinNumber');
    const trimedUserAnswer = userAnswer.replace(/\s+/g, '');
    const lastCharacter = trimedUserAnswer[trimedUserAnswer.length - 1];
    const validToneNumbers = ['0', '1', '2', '3', '4'];
    if (userAnswer) {
      if (isNaN(lastCharacter)) {
        return {
          title: "Don't forget the tone!",
          message: `Your answer should end with a tone number. ${finalSentence(attemptsLeft)}`
        };
      }
      if (validToneNumbers.indexOf(lastCharacter) === -1) {
        return {
          title: "This tone doesn't exist!",
          message: `Possible tones are 1, 2, 3, 4 and 0 (neutral tone). ${finalSentence(attemptsLeft)}`
        };
      }
      if (lastCharacter === expectedAnswer[expectedAnswer.length - 1]) {
        return {
          title: 'Nice try!',
          message: `The tone number (${lastCharacter}) is correct. ${finalSentence(attemptsLeft)}`
        };
      }
      if (trimedUserAnswer.slice(0, -1) === expectedAnswer.slice(0, -1)) {
        return {
          title: 'Very close!',
          message: `The sound (${trimedUserAnswer.slice(0, -1)}) is correct, but the tone is wrong. ${finalSentence(attemptsLeft)}`
        };
      }
    }
    return {
      title: 'Wrong',
      message: `${finalSentence(attemptsLeft)}`
    };
  }
);

const selectors = {
  ...entitySelectors,
  ...studySelectors,
  ...uiSelectors,
  ...audioSelectors,
  ...audioToTextSelectors,
  ...characterPinyinSelectors,
  ...authPinyinSelectors,
  ...reviewSelectors,
  ...routingSelectors,
  ...mapSelectors,
  ...multipleChoiceSelectors,
  ...videoSelectors,
  ...examSelectors,
  ...timerSelectors,
  ...settingsSelectors,
  getCurrentEpisode,
  getFocusedEpisode,
  getCurrentDialog,
  getCurrentDialogStatementsCount,
  getCurrentStatement,
  getCurrentStatementIndex,
  getCurrentSentence,
  getCurrentSentenceIndex,
  getCurrentSentences,
  getCurrentMultipleChoice,
  getCurrentAudioToText,
  getCurrentWord,
  getCurrentAvatars,
  getCurrentWords,
  getNextSentenceId,
  // getPreviousSentenceId,
  getNextStatementId,
  getPreviousStatementId,
  getSentencesCountInCurrentDialog,
  getIsChosenAvatarTalking,
  getCurrentCharacter,
  getCurrentCharacterPosition,
  getCharactersNavParams,
  getCurrentDialogPosition,
  getDialogsNavParams,
  getNextCharacterId,
  getNextDialogId,
  getNextGrammarId,
  getPreviousCharacterId,
  getPreviousDialogId,
  getPreviousGrammarId,
  getCurrentGrammar,
  getMapCharactersCompletedCount,
  getMapDialogsCompletedCount,
  getMapGrammarsCompletedCount,
  getGrammarsNavParams,
  getCompletionPercentage,
  getReviewNavParams,
  getCurrentSeasonEpisodes,
  getCurrentSeason,
  getExamNavParams,
  getFirstSeasonId,
  getCharacterPinyinHints
};

export default selectors;
