import Immutable from 'immutable';

const CharacterRecord = Immutable.Record({
  id: null,
  simpChar: '',
  pinyin: '',
  pinyinNumber: '',
  audioUrl: '',
  completed: false,
  etymologyUrl: '',
  writingUrl: ''
});

class Character extends CharacterRecord {}

export default Character;
