import Immutable from 'immutable';

const CharacterRecord = Immutable.Record({
  id: null,
  chinese: '',
  pinyin: ''
});

class Character extends CharacterRecord {}

export default Character;
