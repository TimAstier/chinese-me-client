import { MultipleChoice, AudioToWords, CharacterPinyin, CharacterStroke }
  from '../containers';

export default function mapTypeToContainers(type) {
  switch (type) {
    case 'audioToChoice':
    case 'textToChoice': return MultipleChoice;
    case 'audioToWords': return AudioToWords;
    case 'characterPinyin': return CharacterPinyin;
    case 'characterStroke': return CharacterStroke;
    default:
      console.log('Unkown exercise type', type); // eslint-disable-line no-console
      return null;
  }
}
