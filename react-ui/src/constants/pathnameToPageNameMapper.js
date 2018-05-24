// This mapping is used to associate a name to the app URLs
// Redux-segment will use this mapping to create a "Page Loaded" event which
// send the name and allow to use "Track Named Pages to Mixpanel"
import { EventTypes } from 'redux-segment';

const { page } = EventTypes;

// TODO: refactor with function which takes URL and return Category and name.
// TODO: unfinished (ony useful to customize segment Load Page events name)
const pageNames = {
  '/study/season/0/episode/1': '1',
  '/study/season/0/episode/2': '2'
};

const pathnameToPageNameMapper = {
  '@@router/INIT_PATH': page,
  '@@router/UPDATE_PATH': page,
  '@@router/LOCATION_CHANGE': (getState, action) => {
    return {
      eventType: EventTypes.page,
      eventPayload: {
        category: 'Lesson',
        name: pageNames[action.payload.pathname] ? pageNames[action.payload.pathname] : null
      }
    };
  },
  '@@reduxReactRouter/initRoutes': page,
  '@@reduxReactRouter/routerDidChange': page,
  '@@reduxReactRouter/replaceRoutes': page
};

export default pathnameToPageNameMapper;
