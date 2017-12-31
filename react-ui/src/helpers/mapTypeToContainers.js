import * as C from '../containers';

export default function mapTypeToContainers(type) {
  switch (type) {
    case 'audioToChoice':
    case 'textToChoice': return C.MultipleChoice;
    case 'audioToWords': return C.AudioToWords;
    case 'audioToText':
    case 'textToText': return C.FreeInput;
    case 'characterPinyin': return C.CharacterPinyin;
    case 'characterStroke': return C.CharacterStroke;
    default:
      console.log('Unkown exercise type', type); // eslint-disable-line no-console
      return null;
  }
}
