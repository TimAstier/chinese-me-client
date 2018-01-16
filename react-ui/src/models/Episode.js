import Immutable from 'immutable';
import logo from '../images/whiteBackgroundLogo.svg';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  seasonId: null,
  number: 0,
  imageUrl: logo,
  score: null,
  requiredUserData: [],
  dialogs: [],
  characters: [],
  words: [],
  grammars: [],
  pronunciations: [],
  multipleChoices: [],
  audioToTexts: [],
  videos: [],
  examples: [],
  practices: []
});

class Episode extends EpisodeRecord {}

export default Episode;
