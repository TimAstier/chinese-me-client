import Immutable from 'immutable';

const Sentence = Immutable.Record({
  id: null,
  order: '',
  chinese: '',
  mood: '',
  audioUrl: '',
  english: ''
});

export default Sentence;
