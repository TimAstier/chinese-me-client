import propTypes from 'prop-types';

export const content = {
  newCharacters: propTypes.func.isRequired,
  newWords: propTypes.func.isRequired,
  example: propTypes.func.isRequired,
  lessonTitle: propTypes.func.isRequired,
  dialog: propTypes.func.isRequired,
  grammarTitle: propTypes.func.isRequired,
  pageNumber: propTypes.func.isRequired,
  character: propTypes.func.isRequired,
  settings: propTypes.object.isRequired,
  characterIds: propTypes.array.isRequired,
  practiceIds: propTypes.array.isRequired
};
