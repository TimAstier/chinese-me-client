import Immutable from 'immutable';

const Sentence = Immutable.Record({
  id: null,
  chinese: '',
  mood: '',
  audioUrl: '',
  english: ''
});

export default Sentence;
