// TODO: DRY selectors (like getNext/Previous ids)
// TODO: DRY get hasManyRelations
// TODO: DRY getNext/Previous...Id
// TODO: DRY getCurrent...
// TODO: DRY getCurrent...Position
// TODO: DRY getMap...CompletedCount

import globalizedSelectors from './selectors/globalizedSelectors';
import * as selectors from './selectors';

const rootSelectors = {
  ...globalizedSelectors,
  ...selectors
};

export default rootSelectors;
