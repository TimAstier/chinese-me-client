import { createSelector } from 'reselect';
import s from './globalizedSelectors';
import getCurrentBookUrl from './getCurrentBookUrl';
import getCurrentEpisode from './getCurrentEpisode';

const getBackUrl = createSelector(
  s.routing.getCurrentScreenType,
  getCurrentEpisode,
  getCurrentBookUrl,
  s.practice.getType,
  (screenType, episode, bookUrl, practiceType) => {
    if (screenType === 'practice/') {
      if (practiceType !== null && practiceType !== 'exam') {
        if (!episode) {
          // This should never happen but prevents from crashing just in case
          return '/';
        }
        return `/study/${episode.id}/review`;
      }
    }
    if (!bookUrl) {
      // This should never happen but prevents from crashing just in case
      return '/';
    }
    return bookUrl;
  }
);

export default getBackUrl;
