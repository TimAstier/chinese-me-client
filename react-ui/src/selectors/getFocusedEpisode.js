import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getFocusedEpisode = createSelector(
  s.entities.getEpisodes,
  s.map.getFocusedEpisodeId,
  (episodes, id) => {
    return episodes.get(String(id));
  }
);

export default getFocusedEpisode;
