import * as fromCharacterEtymology from '../sagas/study/characterEtymology';
import * as fromCharacterPinyin from '../sagas/study/characterPinyin';
import * as fromCharacterStroke from '../sagas/study/characterStroke';
import * as fromCharacterStrokeQuiz from '../sagas/study/characterStrokeQuiz';
import * as fromCharacterWriting from '../sagas/study/characterWriting';
import * as fromDialogListen from '../sagas/study/dialogListen';
import * as fromDialogExplore from '../sagas/study/dialogExplore';
import * as fromDialogRoleplay from '../sagas/study/dialogRoleplay';
import * as fromMultipleChoice from '../sagas/study/multipleChoice';
import * as fromAudioToText from '../sagas/study/audioToText';
import * as fromExam from '../sagas/study/exam';
import * as fromReview from '../sagas/study/review';
import * as fromExamResult from '../sagas/study/examResult';
import * as fromVideo from '../sagas/study/video';

// TODO: Issue: Study screenTypes and Exam screenTypes are not always consistent
// Maybe harmonize them or spleet between two files?

export default function mapScreenTypeToModule(screenType) {
  switch (screenType) {
    case 'character/etymology': return fromCharacterEtymology;
    case 'character/stroke': return fromCharacterStroke;
    case 'characterStrokeQuiz/':
    case 'character/strokeQuiz': return fromCharacterStrokeQuiz;
    case 'characterPinyin/':
    case 'character/pinyin': return fromCharacterPinyin;
    case 'character/writing': return fromCharacterWriting;
    case 'dialog/listen': return fromDialogListen;
    case 'dialog/explore': return fromDialogExplore;
    case 'dialog/roleplay': return fromDialogRoleplay;
    case 'multipleChoice/': return fromMultipleChoice;
    case 'audioToText/': return fromAudioToText;
    case 'video/': return fromVideo;
    case 'review/': return fromReview;
    case 'exam/': return fromExam;
    case 'result/': return fromExamResult;
    default: return console.log('unknown screenType', screenType);
  }
}
