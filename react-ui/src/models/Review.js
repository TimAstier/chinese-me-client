import Immutable from 'immutable';

const ReviewRecord = Immutable.Record({
  episodeId: null,
  multipleChoices: [],
  audioToTexts: [],
  exercises: []
});

class Review extends ReviewRecord {}

export default Review;
