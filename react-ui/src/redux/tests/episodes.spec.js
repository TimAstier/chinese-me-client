import reducer, { INITIAL_STATE, actions, selectors } from '../episodes';
import Episode from '../../models/Episode';
import { fromJS } from 'immutable';

const entities = {
  episodes: {
    1: {
      id: '1',
      attributes: {
        id: 1,
        number: 1,
        title: '你好'
      }
    },
    2: {
      id: '2',
      attributes: {
        id: 2,
        number: 2,
        title: '你是哪国人？'
      }
    },
    3: {
      id: '3',
      attributes: {
        id: 3,
        number: 3,
        title: '我想去中国'
      }
    }
  }
};

const episodes = fromJS({
  1: new Episode({
    id: 1,
    ...entities.episodes[1].attributes
  }),
  2: new Episode({
    id: 1,
    ...entities.episodes[2].attributes
  }),
  3: new Episode({
    id: 1,
    ...entities.episodes[3].attributes
  }),
}).toOrderedMap();

describe('episodes reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it('receives entities', () => {
    const action = actions.receivedEntities(entities);
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
