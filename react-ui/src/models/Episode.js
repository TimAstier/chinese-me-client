import Immutable from 'immutable';
import logo from '../images/whiteBackgroundLogo.svg';

const EpisodeRecord = Immutable.Record({
  id: null,
  title: '',
  seasonId: null,
  number: 0,
  imageUrl: logo,
  locked: true,
  score: null,
  requiredUserData: [],
  dialogs: [],
  characters: [],
  grammars: [],
  multipleChoices: [],
  audioToTexts: []
});

class Episode extends EpisodeRecord {}

export default Episode;
