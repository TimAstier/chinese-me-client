import * as fromTitle from '../sagas/study/title';
import * as fromCharacterEtymology from '../sagas/study/characterEtymology';
import * as fromCharacterPinyin from '../sagas/study/characterPinyin';
import * as fromCharacterStroke from '../sagas/study/characterStroke';
import * as fromCharacterStrokeQuiz from '../sagas/study/characterStrokeQuiz';
import * as fromCharacterWriting from '../sagas/study/characterWriting';
import * as fromGrammarExplanation from '../sagas/study/grammarExplanation';
import * as fromDialogListen from '../sagas/study/dialogListen';
import * as fromDialogExplore from '../sagas/study/dialogExplore';
import * as fromDialogRoleplay from '../sagas/study/dialogRoleplay';
import * as fromMultipleChoice from '../sagas/study/multipleChoice';
import * as fromAudioToText from '../sagas/study/audioToText';
import * as fromExam from '../sagas/study/exam';

// TODO: Issue: Study screenTypes and Exam screenTypes are not always consistent
// Maybe harmonize them or spleet between two files?

export default function mapScreenTypeToModule(screenType) {
  switch (screenType) {
    case 'title/': return fromTitle;
    case 'character/etymology': return fromCharacterEtymology;
    case 'character/stroke': return fromCharacterStroke;
    case 'character/strokeQuiz': return fromCharacterStrokeQuiz;
    case 'characterPinyin/':
    case 'character/pinyin': return fromCharacterPinyin;
    case 'character/writing': return fromCharacterWriting;
    case 'grammar/explanation': return fromGrammarExplanation;
    case 'dialog/listen': return fromDialogListen;
    case 'dialog/explore': return fromDialogExplore;
    case 'dialog/roleplay': return fromDialogRoleplay;
    case 'multipleChoice/': return fromMultipleChoice;
    case 'audioToText/': return fromAudioToText;
    case 'exam/': return fromExam;
    default: return console.log('unknown screenType', screenType);
  }
}
