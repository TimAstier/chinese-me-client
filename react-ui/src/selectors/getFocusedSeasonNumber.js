import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getFocusedSeasonNumber = createSelector(
  s.map.getFocusedEpisodeId,
  s.entities.getEpisodes,
  s.entities.getSeasons,
  (episodeId, episodes, seasons) => {
    if (!episodeId) {
      return null;
    }
    const episode = episodes.get(String(episodeId));
    const season = seasons.get(String(episode.get('seasonId')));
    return season.get('number');
  }
);

export default getFocusedSeasonNumber;
