import { createSelector } from 'reselect';
import getCurrentSeason from './getCurrentSeason';
import getCurrentEpisode from './getCurrentEpisode';

const getCurrentBookUrl = createSelector(
  getCurrentSeason,
  getCurrentEpisode,
  (season, episode) => {
    return `study/season/${season.number}/episode/${episode.number}`;
  }
);

export default getCurrentBookUrl;
