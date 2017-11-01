import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getFirstSeasonId = createSelector(
  s.entities.getSeasons,
  seasons => {
    let minNumber = 9999; // Should be lower than the number of seasons :)
    let id = null;
    seasons
      .entrySeq()
      .forEach(e => {
        if (e[1].number < minNumber) {
          minNumber = e[1].number;
          id = e[0];
        }
      });
    return id;
  }
);

export default getFirstSeasonId;
