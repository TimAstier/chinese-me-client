import Immutable from 'immutable';

const SeasonRecord = Immutable.Record({
  id: null,
  number: null,
  price: null,
  name: null,
  image: null,
  available: null,
  purchased: null,
  purchaseDate: null,
  description: '',
  levels: '',
  episodes: [],
});

class Season extends SeasonRecord {}

export default Season;
