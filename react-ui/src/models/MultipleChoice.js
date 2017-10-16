import Immutable from 'immutable';

const MultipleChoiceRecord = Immutable.Record({
  id: null,
  question: '',
  choices: [],
  episodeId: null,
  order: null,
  explanation: ''
});

class MultipleChoice extends MultipleChoiceRecord {}

export default MultipleChoice;
