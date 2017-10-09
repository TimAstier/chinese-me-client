import { MultipleChoice, AudioToText, CharacterPinyin, CharacterStrokeQuiz }
  from '../containers';

export default function mapTypeToContainers(type) {
  switch (type) {
    case 'multipleChoice': return MultipleChoice;
    case 'audioToText': return AudioToText;
    case 'characterPinyin': return CharacterPinyin;
    case 'characterStrokeQuiz': return CharacterStrokeQuiz;
    default:
      console.log('Unkown exercise type', type); // eslint-disable-line no-console
      return null;
  }
}
