import { createSelector } from 'reselect';
import getCurrentSeason from './getCurrentSeason';
import getCurrentEpisode from './getCurrentEpisode';
import s from './globalizedSelectors';

const getNextEpisode = createSelector(
  getCurrentSeason,
  getCurrentEpisode,
  s.entities.getEpisodes,
  (season, episode, episodes) => {
    if (!season || !episode || !episodes) {
      return null;
    }
    const index = season.episodes.indexOf(episode.id);
    const nextEpisodeId = season.episodes[index + 1];
    return episodes.get(String(nextEpisodeId)) ? episodes.get(String(nextEpisodeId)) : null;
  }
);

export default getNextEpisode;
