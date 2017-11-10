import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getCurrentVideo = createSelector(
  s.entities.getVideos,
  s.study.getCurrentVideoId,
  (videos, id) => videos.get(String(id))
);

export default getCurrentVideo;
