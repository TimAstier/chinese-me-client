import Immutable from 'immutable';

const SentenceRecord = Immutable.Record({
  id: null,
  order: '',
  chinese: '',
  mood: '',
  translation: '',
  audioUrl: null,
  slowAudioUrl: null
});

class Sentence extends SentenceRecord {}

export default Sentence;
