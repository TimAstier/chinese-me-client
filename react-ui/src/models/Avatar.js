import Immutable from 'immutable';

const AvatarRecord = Immutable.Record({
  id: null,
  name: '',
  chineseName: '',
  happyImage: '',
  normalImage: '',
  surprisedImage: '',
  questionImage: '',
  embarrassedImage: '',
  sadImage: '',
  isTalking: false,
  mood: 'happy'
});

class Avatar extends AvatarRecord {}

export default Avatar;
