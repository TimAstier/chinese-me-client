/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Episode, Season } from '../../models';
import { MapSidebar, CharacterBox, MapModal, MapContent } from '../.';
import { Provider } from '../../utils/testComponents';
import { fromJS, OrderedMap } from 'immutable';

// MapModal.propTypes = {
//   open: propTypes.bool.isRequired,
//   handleClose: propTypes.func.isRequired
// };

// MapSidebar.propTypes = {
//   seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
//   episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
//   currentEpisodeId: propTypes.number,
//   focusedEpisodeId: propTypes.number,
//   setFocusedEpisodeId: propTypes.func.isRequired
// };

// MapContent.propTypes = {
//   characters: propTypes.array.isRequired,
//   grammars: propTypes.array.isRequired,
//   dialogs: propTypes.array.isRequired,
//   episode: propTypes.instanceOf(models.Episode),
//   mapCharactersCompletedCount: propTypes.number.isRequired,
//   mapDialogsCompletedCount: propTypes.number.isRequired,
//   mapGrammarsCompletedCount: propTypes.number.isRequired
//   mapLinkClick: propTypes.func.isRequired,
// };

// CharacterBox.propTypes = {
//   char: propTypes.string.isRequired,
//   completed: propTypes.bool,
//   onClick: propTypes.func.isRequired
// };

const seasonEntities = {
  1: {
    id: 1,
    number: 1
  },
  2: {
    id: 2,
    number: 2
  }
};

const episodeEntities = {
  1: {
    id: 1,
    number: 1,
    title: '我叫马文',
    completed: true,
    locked: false,
    seasonId: 1,
    characters: [1, 2, 3, 4],
    grammars: [1, 2, 3],
    dialogs: [1, 2]
  },
  2: {
    id: 2,
    number: 2,
    title: '我叫马文',
    completed: true,
    locked: false,
    seasonId: 1
  },
  3: {
    id: 3,
    number: 3,
    title: '我叫马文',
    completed: true,
    locked: false,
    seasonId: 1
  },
  4: {
    id: 4,
    number: 4,
    title: '我叫马文',
    completed: true,
    locked: false,
    seasonId: 1
  },
  5: {
    id: 5,
    number: 5,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  6: {
    id: 6,
    number: 6,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  7: {
    id: 7,
    number: 7,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  8: {
    id: 8,
    number: 8,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  9: {
    id: 9,
    number: 9,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  10: {
    id: 10,
    number: 10,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  11: {
    id: 11,
    number: 11,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  12: {
    id: 12,
    number: 12,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  13: {
    id: 13,
    number: 13,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  14: {
    id: 14,
    number: 14,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  15: {
    id: 15,
    number: 15,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  16: {
    id: 16,
    number: 16,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  17: {
    id: 17,
    number: 17,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  18: {
    id: 18,
    number: 18,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  19: {
    id: 19,
    number: 19,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  20: {
    id: 20,
    number: 20,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 1
  },
  21: {
    id: 21,
    number: 1,
    title: '我叫马文',
    completed: false,
    locked: true,
    seasonId: 2
  }
};

const characters = [{
  id: 1,
  simpChar: '我',
  characterEpisode: {
    id: 1,
    characterId: 1,
    episodeId: 1,
    order: 1
  },
  userCharacters: []
}, {
  id: 2,
  simpChar: '姓',
  characterEpisode: {
    id: 2,
    characterId: 2,
    episodeId: 1,
    order: 2
  },
  userCharacters: []
}, {
  id: 3,
  simpChar: '李',
  characterEpisode: {
    id: 3,
    characterId: 3,
    episodeId: 1,
    order: 3
  },
  userCharacters: []
}, {
  id: 4,
  simpChar: '木',
  characterEpisode: {
    id: 4,
    characterId: 4,
    episodeId: 1,
    order: 4
  },
  userCharacters: []
}];

const grammars = [{
  id: 1,
  title: 'A. Spelling names',
  completed: true,
  userGrammars: []
}, {
  id: 2,
  title: 'B. Using 的',
  userGrammars: []
}, {
  id: 3,
  title: 'C. Use 了.1',
  userGrammars: []
}];

const dialogs = [{
  id: 1,
  title: '我姓李，木子李',
  userDialogs: []
}, {
  id: 2,
  title: '你叫声么名字？',
  completed: true,
  userDialogs: []
}];

let seasonMap = new OrderedMap();
seasonMap = seasonMap
  .merge(fromJS(seasonEntities)
  .map(season => new Season(season)));

let episodeMap = new OrderedMap();
episodeMap = episodeMap
  .merge(fromJS(episodeEntities)
  .map(episode => new Episode(episode)));

storiesOf('MapModal', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('MapModal: opened', () =>
    <MapModal
      open
      handleClose={()=>{}}
    />
  )
  .add('MapModal: closed', () =>
    <MapModal
      open={false}
      handleClose={()=>{}}
    />
  )
  .add('MapModal: handleClose', () =>
    <MapModal
      open
      handleClose={()=>console.log('handleClose!')}
    />
  )
  .add('MapSidebar: no focus/playing', () =>
    <MapSidebar
      seasons={seasonMap}
      episodes={episodeMap}
      setFocusedEpisodeId={()=>{}}
    />
  )
  .add('MapSidebar: focus, no playing', () =>
    <MapSidebar
      seasons={seasonMap}
      episodes={episodeMap}
      focusedEpisodeId={1}
      setFocusedEpisodeId={()=>{}}
    />
  )
  .add('MapSidebar: focus playing', () =>
    <MapSidebar
      seasons={seasonMap}
      episodes={episodeMap}
      currentEpisodeId={3}
      focusedEpisodeId={3}
      setFocusedEpisodeId={()=>{}}
    />
  )
  .add('MapSidebar: focus other', () =>
    <MapSidebar
      seasons={seasonMap}
      episodes={episodeMap}
      currentEpisodeId={3}
      focusedEpisodeId={4}
      setFocusedEpisodeId={()=>{}}
    />
  )
  .add('CharacterBox', () =>
    <CharacterBox
      char="我"
      onClick={()=>{}}
    />
  )
  .add('CharacterBox: completed', () =>
    <CharacterBox
      char="我"
      completed
      onClick={()=>{}}
    />
  )
  .add('CharacterBox: onClick', () =>
    <CharacterBox
      char="我"
      onClick={()=>console.log('clicked!')}
    />
  )
  .add('MapContent', () =>
    <MapContent
      characters={characters}
      grammars={grammars}
      dialogs={dialogs}
      episode={episodeMap.get('1')}
      mapCharactersCompletedCount={3}
      mapDialogsCompletedCount={4}
      mapGrammarsCompletedCount={5}
      mapLinkClick={()=>console.log('mapLinkClick!')}
    />
  );
