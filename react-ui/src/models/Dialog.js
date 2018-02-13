import Immutable from 'immutable';

const DialogRecord = Immutable.Record({
  id: null,
  order: null,
  introAudioUrl: '',
  chineseTitle: '',
  avatars: [],
  statements: [],
  words: [],
  completed: false,
  titleTranslation: '',
  intro: '',
  hasAudio: null
});

class Dialog extends DialogRecord {
  countStatements() {
    return this.get('statements').length;
  }
}

export default Dialog;
