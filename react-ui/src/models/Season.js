import Immutable from 'immutable';

const SeasonRecord = Immutable.Record({
  id: null,
  number: null,
  episodes: [],
});

class Season extends SeasonRecord {}

export default Season;
