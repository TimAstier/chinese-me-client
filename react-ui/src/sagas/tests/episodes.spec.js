import { call, put } from 'redux-saga/effects';
import Api from '../../helpers/api';
import { actions } from '../../redux/episodes';

import { fetchEpisodes } from '../episodes';
import episodesDeserializer from '../../utils/deserializers/episode';

describe('fetchEpisodes saga', () => {
  it('fetches episodes successfully', () => {
    const iterator = fetchEpisodes();

    // call to the Api
    expect(iterator.next().value).toEqual(call(Api.get, '/episodes'));

    // create a fake response
    const response = {
      data: [{id: 1, number: 1, title: 'plop'}]
    };

    // deserialize the fake response
    const data = episodesDeserializer(response.data);

    // dispatch an action to set episodes
    expect(iterator.next(response).value)
      .toEqual(put(actions.receivedEntities(data)));

    // dispatch a success action
    expect(iterator.next().value).toEqual(put(actions.fetchSuccess()));

    // fetchEpisodes saga is done
    expect(iterator.next()).toEqual({ done: true, value: undefined });
  });

  it('dispatches a fail action for bad requests', () => {
    const iterator = fetchEpisodes();

    // call to the Api
    iterator.next();

    // dispatch a fail action with an error
    const error = { status: 404, message: 'episodes_not_found' };
    expect(iterator.throw(error).value)
      .toEqual(put(actions.fetchFail(error)));
  });
});
