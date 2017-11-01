import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getMapDialogsCompletedCount = createSelector(
  s.map.getDialogs,
  dialogs => {
    return dialogs.filter(d => d.get('userDialogs').size !== 0).size;
  }
);

export default getMapDialogsCompletedCount;
