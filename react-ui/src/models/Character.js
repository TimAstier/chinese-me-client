import Immutable from 'immutable';

const CharacterRecord = Immutable.Record({
  id: null,
  simpChar: '',
  pinyinNumber: '',
  completed: false,
  calligraphyVideo: '',
  calligraphyHash: '',
  etymologyHash: '',
  hanziData: null,
  radical: '',
  phonetic: '',
  meaning: ''
});

class Character extends CharacterRecord {}

export default Character;
