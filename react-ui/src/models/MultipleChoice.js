import Immutable from 'immutable';

const MultipleChoiceRecord = Immutable.Record({
  id: null,
  question: '',
  choices: [],
  correctAnswer: null,
  explanation: '',
  episodeId: null,
  order: null
});

class MultipleChoice extends MultipleChoiceRecord {}

export default MultipleChoice;
