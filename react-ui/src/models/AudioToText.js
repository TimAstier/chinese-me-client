import Immutable from 'immutable';

const AudioToTextRecord = Immutable.Record({
  id: null,
  episodeId: null,
  order: null,
  audioUrl: '',
  words: []
});

// console.log(AudioToTextRecord)

class AudioToText extends AudioToTextRecord {}

// console.log(new AudioToText())

export default AudioToText;
