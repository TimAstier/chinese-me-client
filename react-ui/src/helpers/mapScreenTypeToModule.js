import * as fromCharacterEtymology from '../sagas/study/characterEtymology';
import * as fromCharacterPinyin from '../sagas/study/characterPinyin';
import * as fromCharacterAnimation from '../sagas/study/characterAnimation';
import * as fromCharacterStroke from '../sagas/study/characterStroke';
import * as fromCharacterCalligraphy from '../sagas/study/characterCalligraphy';
import * as fromDialogWatch from '../sagas/study/dialogWatch';
import * as fromDialogExplore from '../sagas/study/dialogExplore';
import * as fromDialogRoleplay from '../sagas/study/dialogRoleplay';
import * as fromMultipleChoice from '../sagas/study/multipleChoice';
import * as fromAudioToWords from '../sagas/study/audioToWords';
import * as fromExam from '../sagas/study/exam';
import * as fromPractice from '../sagas/study/practice';
import * as fromExamResult from '../sagas/study/examResult';
import * as fromVideo from '../sagas/study/video';
import * as fromFreeInput from '../sagas/study/freeInput';
import * as fromChoicesToOrder from '../sagas/study/choicesToOrder';
import * as fromReview from '../sagas/study/review';

// TODO: Issue: Study screenTypes and Exam screenTypes are not always consistent
// Maybe harmonize them or spleet between two files?

export default function mapScreenTypeToModule(screenType) {
  switch (screenType) {
    case 'character/etymology': return fromCharacterEtymology;
    case 'character/animation': return fromCharacterAnimation;
    case 'characterStroke/':
    case 'character/stroke': return fromCharacterStroke;
    case 'characterPinyin/':
    case 'character/pinyin': return fromCharacterPinyin;
    case 'character/calligraphy': return fromCharacterCalligraphy;
    case 'dialog/watch': return fromDialogWatch;
    case 'dialog/explore': return fromDialogExplore;
    case 'dialog/roleplay': return fromDialogRoleplay;
    case 'audioToChoice/':
    case 'textToChoice/': return fromMultipleChoice;
    case 'textToText/':
    case 'audioToText/': return fromFreeInput;
    case 'audioToWords/': return fromAudioToWords;
    case 'choicesToOrder/': return fromChoicesToOrder;
    case 'video/': return fromVideo;
    case 'practice/': return fromPractice;
    case 'exam/': return fromExam;
    case 'result/': return fromExamResult;
    case 'review/': return fromReview;
    default: return console.log('unknown screenType', screenType);
  }
}
