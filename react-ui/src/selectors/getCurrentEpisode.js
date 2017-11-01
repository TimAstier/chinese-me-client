import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentEpisode = createSelector(
  s.entities.getEpisodes,
  s.study.getCurrentEpisodeId,
  (episodes, id) => episodes.get(String(id))
);

export default getCurrentEpisode;
