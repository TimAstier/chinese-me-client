import { createSelector } from 'reselect';
import getCurrentEpisode from  './getCurrentEpisode';

const getRequiredUserData = createSelector(
  getCurrentEpisode,
  episode => episode ? episode.get('requiredUserData') : undefined
);

export default getRequiredUserData;
