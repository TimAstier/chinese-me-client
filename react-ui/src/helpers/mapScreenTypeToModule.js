import * as fromTitle from '../sagas/study/title';
import * as fromCharacterPinyin from '../sagas/study/characterPinyin';
import * as fromDialogListen from '../sagas/study/dialogListen';
import * as fromDialogExplore from '../sagas/study/dialogExplore';
import * as fromDialogRoleplay from '../sagas/study/dialogRoleplay';

export default function mapScreenTypeToModule(screenType) {
  switch (screenType) {
    case 'title/': return fromTitle;
    case 'character/pinyin': return fromCharacterPinyin;
    case 'dialog/listen': return fromDialogListen;
    case 'dialog/explore': return fromDialogExplore;
    case 'dialog/roleplay': return fromDialogRoleplay;
    default: return console.log('unknown screenType');
  }
}
