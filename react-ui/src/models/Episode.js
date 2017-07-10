import Immutable from 'immutable';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  number: null,
  status: '',
  score: null,
  dialogs: []
});

class Episode extends EpisodeRecord {}

export default Episode;
