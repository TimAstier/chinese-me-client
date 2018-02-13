import { audioUrls } from '../constants/urls';

const makeAudioUrl = name => {
  const type = name.split(('/')).filter(Boolean)[0];
  switch (type) {
    case 'characters':
    case 'words': return audioUrls.basePath + name;
    default: return audioUrls.exercisesPath + '/' + name;
  }
};

export default makeAudioUrl;
