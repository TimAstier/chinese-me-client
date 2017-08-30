import Immutable from 'immutable';

const AudioToTextRecord = Immutable.Record({
  id: null,
  episodeId: null,
  order: null,
  audioUrl: '',
  words: []
});

class AudioToText extends AudioToTextRecord {}

export default AudioToText;
