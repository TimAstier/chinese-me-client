import Immutable from 'immutable';
import logo from '../images/whiteBackgroundLogo.svg';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  seasonId: null,
  number: 0,
  imageUrl: logo,
  dialogs: [],
  characters: [],
  grammars: [],
  multipleChoices: [],
  audioToTexts: [],
  locked: true,
  review: null,
  score: null
});

class Episode extends EpisodeRecord {}

export default Episode;
