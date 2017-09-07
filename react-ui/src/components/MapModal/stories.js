/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Episode, Character, Grammar, Dialog, Season } from '../../models';
import { MapModal } from '../../containers';
import { MapSidebar, MapContent, CharacterBox } from '../.';
import Provider from '../../utils/Provider';
import { fromJS } from 'immutable';

// MapModal.propTypes = {
//   open: propTypes.bool.isRequired,
//   handleClose: propTypes.func.isRequired,
//   characters: propTypes.arrayOf(propTypes.instanceOf(models.Character)),
//   grammars: propTypes.arrayOf(propTypes.instanceOf(models.Grammar)),
//   dialogs: propTypes.arrayOf(propTypes.instanceOf(models.Dialog))
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
//   mapLinkClick: propTypes.func.isRequired,
//   mapCharactersCompletedCount: propTypes.number.isRequired,
//   mapDialogsCompletedCount: propTypes.number.isRequired,
//   mapGrammarsCompletedCount: propTypes.number.isRequired
// };

// CharacterBox.propTypes = {
//   char: propTypes.string.isRequired,
//   completed: propTypes.bool,
//   onClick: propTypes.func.isRequired
// };

const seasons = [{
  id: 1,
  number: 1
}, {
  id: 2,
  number: 2
}];

const episodes = [{
  id: 0,
  number: 0,
  title: '我叫马文',
  completed: true,
  locked: false,
  seasonId: 1
}, {
  id: 1,
  number: 1,
  title: '我叫马文',
  completed: true,
  locked: false,
  seasonId: 1
}, {
  id: 2,
  number: 2,
  title: '你中文很好',
  completed: true,
  locked: false,
  seasonId: 1
}, {
  id: 3,
  number: 3,
  title: '我姓李',
  locked: false,
  seasonId: 1
}, {
  id: 4,
  number: 4,
  title: '我可以帮你',
  seasonId: 1
}, {
  id: 5,
  number: 5,
  title: '你是谁？',
  seasonId: 1
}, {
  id: 6,
  number: 6,
  title: '我帮你找房子',
  seasonId: 1
}, {
  id: 7,
  number: 7,
  title: '你的电话多少？',
  seasonId: 1
}, {
  id: 8,
  number: 8,
  title: '你怎么学中文？',
  seasonId: 1
}, {
  id: 9,
  number: 9,
  title: '买手机',
  seasonId: 1
}, {
  id: 10,
  number: 10,
  title: '讨价',
  seasonId: 1
}, {
  id: 11,
  number: 11,
  title: '喝茶',
  seasonId: 1
}, {
  id: 12,
  number: 12,
  title: '吃饭',
  seasonId: 1
}, {
  id: 13,
  number: 13,
  title: '住酒店',
  seasonId: 1
}, {
  id: 14,
  number: 14,
  title: '明天没有房间',
  seasonId: 1
}, {
  id: 15,
  number: 15,
  title: '我很着急',
  seasonId: 1
}, {
  id: 16,
  number: 16,
  title: '租房间',
  seasonId: 1
}, {
  id: 17,
  number: 17,
  title: '我有一个好朋友',
  seasonId: 1
}, {
  id: 18,
  number: 18,
  title: '我们在搬家',
  seasonId: 1
}, {
  id: 19,
  number: 19,
  title: '坐地铁',
  seasonId: 1
}, {
  id: 20,
  number: 20,
  title: '一起吃晚饭',
  seasonId: 1
}];

const characters = [{
  id: 1,
  simpChar: '我',
  completed: true
}, {
  id: 2,
  simpChar: '姓',
  completed: true
}, {
  id: 3,
  simpChar: '李',
  completed: true
}, {
  id: 4,
  simpChar: '木',
  completed: true
}, {
  id: 5,
  simpChar: '子',
}, {
  id: 6,
  simpChar: '贵',
}, {
  id: 7,
  simpChar: '明',
}, {
  id: 8,
  simpChar: '白',
}, {
  id: 9,
  simpChar: '来',
}, {
  id: 10,
  simpChar: '中',
}, {
  id: 11,
  simpChar: '国',
}, {
  id: 12,
  simpChar: '谁',
}, {
  id: 13,
  simpChar: '本',
}];

const grammars = [{
  id: 1,
  title: 'A. Spelling names',
  completed: true
}, {
  id: 2,
  title: 'B. Using 的'
}, {
  id: 3,
  title: 'C. Use 了.1'
}];

const dialogs = [{
  id: 1,
  title: '我姓李，木子李'
}, {
  id: 2,
  title: '你叫声么名字？',
  completed: true
}];

const seasonMap = fromJS(seasons)
  .map(season => new Season(season))
  .toOrderedMap();

const episodeMap = fromJS(episodes)
  .map(episode => new Episode(episode))
  .toOrderedMap();

storiesOf('MapModal', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('MapSidebar: no focus/playing', () =>
    <MapSidebar
      seasons={seasonMap}
      episodes={episodeMap}
      setFocusedEpisodeId={()=>{}}
    />
  );
  // Broken because .toOrderedMap generate maps with INTEGER keys
  //TODO: be sure that everything is indexed with Integer in store and
  // remove confusing String() and Number()
  // .add('MapSidebar: focus, no playing', () =>
  //   <MapSidebar
  //     seasons={seasonMap}
  //     episodes={episodeMap}
  //     focusedEpisodeId={3}
  //     setFocusedEpisodeId={()=>{}}
  //   />
  // );
  // .add('MapSidebar: focus playing', () =>
  //   <MapSidebar
  //     seasons={seasonMap}
  //     episodes={episodeMap}
  //     currentEpisodeId={3}
  //     focusedEpisodeId={3}
  //     setFocusedEpisodeId={()=>{}}
  //   />
  // )
  // .add('MapSidebar: focus other', () =>
  //   <MapSidebar
  //     seasons={seasonMap}
  //     episodes={episodeMap}
  //     currentEpisodeId={3}
  //     focusedEpisodeId={4}
  //     setFocusedEpisodeId={()=>{}}
  //   />
  // )
  // .add('CharacterBox', () =>
  //   <CharacterBox
  //     char="我"
  //     onClick={()=>{}}
  //   />
  // )
  // .add('CharacterBox: completed', () =>
  //   <CharacterBox
  //     char="我"
  //     completed
  //     onClick={()=>{}}
  //   />
  // )
  // .add('MapModal', () =>
  //   <MapModal
  //     open
  //     handleClose={()=>{}}
  //     episodes={episodes}
  //     currentEpisodeId={2}
  //     characters={characters}
  //     grammars={grammars}
  //     dialogs={dialogs}
  //   />
  // );
