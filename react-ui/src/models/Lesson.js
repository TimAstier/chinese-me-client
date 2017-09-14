import Immutable from 'immutable';

const LessonRecord = Immutable.Record({
  id: null,
  title: '',
  number: 0,
  examples: [],
  dialogs: []
});

class Lesson extends LessonRecord {}

export default Lesson;
