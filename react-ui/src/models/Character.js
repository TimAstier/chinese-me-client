import Immutable from 'immutable';

const CharacterRecord = Immutable.Record({
  id: null,
  simpChar: '',
  pinyinNumber: '',
  audioUrl: '',
  etymologyUrl: '',
  writingUrl: '',
  completed: false
});

class Character extends CharacterRecord {}

export default Character;
