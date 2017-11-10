import Immutable from 'immutable';

const VideoRecord = Immutable.Record({
  id: null,
  order: null,
  title: '',
  videoUrl: ''
});

class Video extends VideoRecord {}

export default Video;
