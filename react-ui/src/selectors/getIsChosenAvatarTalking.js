import { createSelector } from 'reselect';
import s from './globalizedSelectors';

const getIsChosenAvatarTalking = createSelector(
  s.study.getChosenAvatarId,
  s.entities.getAvatars,
  (id, avatars) => {
    if (id && avatars.get(String(id))) {
      return avatars.get(String(id)).isTalking;
    }
    return false;
  }
);

export default getIsChosenAvatarTalking;
