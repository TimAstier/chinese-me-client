import Immutable from 'immutable';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  seasonId: null,
  number: null,
  status: '',
  score: null,
  dialogs: [],
  characters: [],
  grammars: [],
  completed: false,
  locked: true
});

class Episode extends EpisodeRecord {}

export default Episode;
