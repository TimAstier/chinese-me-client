import React from 'react';
import { storiesOf } from '@storybook/react';
import { Episode, Character, Grammar, Dialog } from '../../models';

import { MapModal } from '../../containers';
import { MapSidebar, MapContent, CharacterBox, MapContentItem } from '../.';
import Provider from '../../utils/Provider';

const episodes = [
  new Episode({
    id: 1,
    number: 1,
    title: '我叫马文',
    completed: true,
    locked: false
  }),
  new Episode({
    id: 2,
    number: 2,
    title: '你中文很好',
    completed: true,
    locked: false
  }),
  new Episode({
    id: 3,
    number: 3,
    title: '我姓李',
    locked: false
  }),
  new Episode({
    id: 4,
    number: 4,
    title: '我可以帮你'
  }),
  new Episode({
    id: 5,
    number: 5,
    title: '你是谁？'
  }),
  new Episode({
    id: 6,
    number: 6,
    title: '我帮你找房子'
  }),
  new Episode({
    id: 7,
    number: 7,
    title: '你的电话多少？'
  }),
  new Episode({
    id: 8,
    number: 8,
    title: '你怎么学中文？'
  }),
  new Episode({
    id: 9,
    number: 9,
    title: '买手机'
  }),
  new Episode({
    id: 10,
    number: 10,
    title: '讨价'
  }),
  new Episode({
    id: 11,
    number: 11,
    title: '喝茶'
  }),
  new Episode({
    id: 12,
    number: 12,
    title: '吃饭'
  }),
  new Episode({
    id: 13,
    number: 13,
    title: '住酒店'
  }),
  new Episode({
    id: 14,
    number: 14,
    title: '明天没有房间'
  }),
  new Episode({
    id: 15,
    number: 15,
    title: '我很着急'
  }),
  new Episode({
    id: 16,
    number: 16,
    title: '租房间'
  }),
  new Episode({
    id: 17,
    number: 17,
    title: '我有一个好朋友'
  }),
  new Episode({
    id: 18,
    number: 18,
    title: '我们在搬家'
  }),
  new Episode({
    id: 19,
    number: 19,
    title: '坐地铁'
  }),
  new Episode({
    id: 20,
    number: 20,
    title: '一起吃晚饭'
  })
];

const characters = [
  new Character({
    id: 1,
    simpChar: '我',
    completed: true
  }),
  new Character({
    id: 2,
    simpChar: '姓',
    completed: true
  }),
  new Character({
    id: 3,
    simpChar: '李',
    completed: true
  }),
  new Character({
    id: 4,
    simpChar: '木',
    completed: true
  }),
  new Character({
    id: 5,
    simpChar: '子',
  }),
  new Character({
    id: 6,
    simpChar: '贵',
  }),
  new Character({
    id: 7,
    simpChar: '明',
  }),
  new Character({
    id: 8,
    simpChar: '白',
  }),
  new Character({
    id: 9,
    simpChar: '来',
  }),
  new Character({
    id: 10,
    simpChar: '中',
  }),
  new Character({
    id: 11,
    simpChar: '国',
  }),
  new Character({
    id: 12,
    simpChar: '谁',
  }),
  new Character({
    id: 13,
    simpChar: '本',
  })
];

const grammars = [
  new Grammar({
    id: 1,
    title: 'A. Spelling names',
    completed: true
  }),
  new Grammar({
    id: 2,
    title: 'B. Using 的'
  }),
  new Grammar({
    id: 3,
    title: 'C. Use 了.1'
  })
];

const dialogs = [
  new Dialog({
    id: 1,
    title: '我姓李，木子李'
  }),
  new Dialog({
    id: 2,
    title: '你叫声么名字？',
    completed: true
  })
];

storiesOf('MapModal', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('MapSidebar: focus playing', () => {
    return (
      <MapSidebar episodes={episodes} currentEpisodeId={3}/>
    );
  })
  .add('MapSidebar: focus other', () => {
    return (
      <MapSidebar episodes={episodes} currentEpisodeId={2}/>
    );
  })
  .add('CharacterBox', () => {
    return (
      <CharacterBox char="我"/>
    );
  })
  .add('CharacterBox: completed', () => {
    return (
      <CharacterBox char="我" completed/>
    );
  })
  .add('MapContent', () => {
    return (
      <MapContent />
    );
  })
  .add('MapContentItem', () => {
    return (
      <MapContentItem
        title="Hey"
        completed
      />
    );
  })
  .add('MapModal', () => {
    return (
      <MapModal
        open
        handleClose={()=>{}}
        episodes={episodes}
        currentEpisodeId={2}
        characters={characters}
        grammars={grammars}
        dialogs={dialogs}
      />
    );
  });
