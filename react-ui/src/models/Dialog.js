import Immutable from 'immutable';

const DialogRecord = Immutable.Record({
  id: null,
  order: null,
  introAudioUrl: '',
  title: '',
  avatars: [],
  statements: [],
  completed: false
});

class Dialog extends DialogRecord {
  countStatements() {
    return this.get('statements').length;
  }
}

export default Dialog;
