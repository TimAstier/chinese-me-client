import Immutable from 'immutable';

const StatementRecord = Immutable.Record({
  id: null,
  order: null,
  sentences: [],
  avatarId: null
});

class Statement extends StatementRecord {}

export default Statement;
