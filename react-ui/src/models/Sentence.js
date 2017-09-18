import Immutable from 'immutable';

const SentenceRecord = Immutable.Record({
  id: null,
  order: '',
  chinese: '',
  mood: '',
  audioUrl: '',
  translation: ''
});

class Sentence extends SentenceRecord {}

export default Sentence;
