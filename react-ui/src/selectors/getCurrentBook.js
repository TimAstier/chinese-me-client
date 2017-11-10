import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentBook = createSelector(
  s.entities.getBooks,
  s.study.getCurrentEpisodeId,
  (books, id) => {
    if (books.get(String(id))) {
      return books.get(String(id));
    }
    return undefined;
  }
);

export default getCurrentBook;
