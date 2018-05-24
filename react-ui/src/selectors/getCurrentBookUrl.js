import { createSelector } from 'reselect';
import getCurrentSeason from './getCurrentSeason';
import getCurrentEpisode from './getCurrentEpisode';

const getCurrentBookUrl = createSelector(
  getCurrentSeason,
  getCurrentEpisode,
  (season, episode) => {
    return `/course/season/${season.number}/episode/${episode.number}`;
  }
);

export default getCurrentBookUrl;
