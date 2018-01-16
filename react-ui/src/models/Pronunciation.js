import Immutable from 'immutable';

const PronunciationRecord = Immutable.Record({
  id: null,
  title: '',
});

class Pronunciation extends PronunciationRecord {}

export default Pronunciation;
