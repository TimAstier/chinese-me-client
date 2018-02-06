import Immutable from 'immutable';

const ExerciseRecord = Immutable.Record({
  id: null,
  type: '',
  guidelineText: '',
  questionText: '',
  audioUrl: '',
  translation: '',
  characterId: '',
  choices: [],
  words: []
});

class Exercise extends ExerciseRecord {}

export default Exercise;
