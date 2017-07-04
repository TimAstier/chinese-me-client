import Immutable from 'immutable';
import createNamedEntityReducer, { INITIAL_STATE } from '../entities';

describe('createNamedEntityReducer', () => {
  it('returns a working reducer', () => {
    // fake model
    const Avatar = Immutable.Record({
      id: null,
      name: '',
    });

    const reducer = createNamedEntityReducer('avatars', Avatar);
    expect(typeof(reducer)).toBe('function');
    expect(reducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });
});
