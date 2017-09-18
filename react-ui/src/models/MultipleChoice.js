import Immutable from 'immutable';

const MultipleChoiceRecord = Immutable.Record({
  id: null,
  question: '',
  choices: [],
  correctAnswer: null,
  episodeId: null,
  order: null,
  explanation: ''
});

class MultipleChoice extends MultipleChoiceRecord {}

export default MultipleChoice;
