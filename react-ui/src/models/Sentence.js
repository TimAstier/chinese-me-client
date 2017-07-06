import Immutable from 'immutable';

const SentenceRecord = Immutable.Record({
  id: null,
  order: '',
  chinese: '',
  mood: '',
  audioUrl: '',
  english: ''
});

class Sentence extends SentenceRecord {}

export default Sentence;
