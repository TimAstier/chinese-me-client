import * as fromCharacterPinyin from '../sagas/study/characterPinyin';
import * as fromDialogListen from '../sagas/study/dialogListen';
import * as fromDialogExplore from '../sagas/study/dialogExplore';
import * as fromDialogRoleplay from '../sagas/study/dialogRoleplay';

export default function mapScreenTypeToModule(screenType) {
  switch (screenType) {
    case 'character/pinyin': return fromCharacterPinyin;
    case 'dialog/listen': return fromDialogListen;
    case 'dialog/explore': return fromDialogExplore;
    case 'dialog/roleplay': return fromDialogRoleplay;
    default: return 'unkown screenType';
  }
}
