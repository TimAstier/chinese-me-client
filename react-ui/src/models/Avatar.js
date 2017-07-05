import Immutable from 'immutable';

const AvatarRecord = Immutable.Record({
  id: null,
  name: '',
  chineseName: '',
  happyImage: '',
  blinkImage: '',
  surprisedImage: '',
  isTalking: false,
  mood: 'happy'
});

class Avatar extends AvatarRecord {}

export default Avatar;
