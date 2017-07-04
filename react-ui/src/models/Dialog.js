import Immutable from 'immutable';

const Dialog = Immutable.Record({
  id: null,
  order: null,
  introAudioUrl: '',
  avatars: [],
  statements: []
});

export default Dialog;
