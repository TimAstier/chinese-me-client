import Immutable from 'immutable';

const Avatar = Immutable.Record({
  id: null,
  name: '',
  chineseName: '',
  happyImage: '',
  blinkImage: '',
  surprisedImage: ''
});

export default Avatar;
