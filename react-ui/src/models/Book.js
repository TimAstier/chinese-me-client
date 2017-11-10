import Immutable from 'immutable';

const BookRecord = Immutable.Record({
  id: null,
  title: '',
  number: 0,
  characters: [],
  examples: [],
  dialogs: []
});

class Book extends BookRecord {}

export default Book;
