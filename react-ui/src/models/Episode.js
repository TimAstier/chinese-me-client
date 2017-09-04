import Immutable from 'immutable';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  seasonId: null,
  number: null,
  imageUrl: '',
  dialogs: [],
  characters: [],
  grammars: [],
  multipleChoices: [],
  audioToTexts: [],
  locked: null,
  review: null,
  score: null
});

class Episode extends EpisodeRecord {}

export default Episode;
