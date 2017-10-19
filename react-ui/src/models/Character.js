import Immutable from 'immutable';

const CharacterRecord = Immutable.Record({
  id: null,
  simpChar: '',
  pinyinNumber: '',
  completed: false,
  etymologyUrl: '',
  writingUrl: '',
  hanziData: null,
  meaning: ''
});

class Character extends CharacterRecord {}

export default Character;
