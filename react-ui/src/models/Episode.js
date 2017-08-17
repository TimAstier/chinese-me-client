import Immutable from 'immutable';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  number: null,
  status: '',
  score: null,
  dialogs: [],
  characters: [],
  completed: false,
  locked: true
});

class Episode extends EpisodeRecord {}

export default Episode;
