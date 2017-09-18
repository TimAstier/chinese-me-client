import Immutable from 'immutable';

const ExampleRecord = Immutable.Record({
  id: null,
  order: 0,
  chinese: '',
  pinyin: '',
  translation: '',
  literalTranslation: ''
});

class Example extends ExampleRecord {}

export default Example;
