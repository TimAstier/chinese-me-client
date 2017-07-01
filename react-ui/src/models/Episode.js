import Immutable from 'immutable';

const Episode = Immutable.Record({
  id: null,
  title: '',
  number: null,
  status: '',
  score: null
});

export default Episode;
