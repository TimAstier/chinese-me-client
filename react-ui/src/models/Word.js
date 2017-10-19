import Immutable from 'immutable';

const WordRecord = Immutable.Record({
  id: null,
  order: '',
  chinese: '',
  pinyin: '',
  meanings: []
});

class Word extends WordRecord {}

export default Word;
