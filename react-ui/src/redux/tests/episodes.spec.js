import reducer, { INITIAL_STATE, actions, selectors } from '../episodes';
import episodes from '../../test/data/episodes';

describe('episodes reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it('receives entities', () => {
    const action = actions.receivedEntities(episodes);
    const nextState = reducer(INITIAL_STATE, action);
    expect(selectors.getEpisodes(nextState)).toEqual(episodes);
  });

  it('sets isFetching to true', () => {
    const action = actions.fetch();
    const nextState = reducer(INITIAL_STATE, action);
    expect(selectors.getIsFetching(nextState)).toEqual(true);
  });

  it('sets isFetching back to false', () => {
    const successAction = actions.fetchSuccess();
    const failAction = actions.fetchFail();
    const successState = reducer(INITIAL_STATE, successAction);
    const failState = reducer(INITIAL_STATE, failAction);
    expect(selectors.getIsFetching(successState)).toEqual(false);
    expect(selectors.getIsFetching(failState)).toEqual(false);
  });
});
