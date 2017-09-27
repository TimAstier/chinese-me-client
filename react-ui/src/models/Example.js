import Immutable from 'immutable';

const ExampleRecord = Immutable.Record({
  id: null,
  order: 0,
  chinese: '',
  pinyin: '',
  translation: '',
  literalTranslation: '',
  audioUrl: ''
});

class Example extends ExampleRecord {}

export default Example;
