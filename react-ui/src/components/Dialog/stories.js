/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../../models';
import Sentence from '../../models/Sentence';
import { EpisodeScreen, Dialog } from '../.';
import { Provider } from '../../utils/testComponents';

// Dialog.propTypes = {
  // sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  // avatars: propTypes.arrayOf(propTypes.instanceOf(models.Avatar)).isRequired,
  // currentSentenceIndex: propTypes.number.isRequired,
  // chosenAvatarId: propTypes.number.isRequired,
  // dialogMode: propTypes.string.isRequired,
  // dialogLinkClick: propTypes.func.isRequired,
  // currentEpisodeId: propTypes.string.isRequired,
  // currentDialogId: propTypes.string.isRequired,
  // previousStatement: propTypes.func.isRequired,
  // nextStatement: propTypes.func.isRequired,
  // statementsCount: propTypes.number.isRequired,
  // currentStatementIndex: propTypes.number.isRequired
// };

const threeSentences = [
  new Sentence({
    chinese: '我叫马文。',
    english: 'My name is Marvin.'
  }), new Sentence({
    chinese: '我是美国人。',
    english: 'I am American'
  }), new Sentence({
    chinese: '您贵姓？',
    english: 'What\'s your name?'
  })
];

const avatars = [new Avatar({ id: 1 }), new Avatar()];

const mockProps = {
  sentences: threeSentences,
  avatars: avatars,
  dialogLinkClick: ()=>{},
  previousStatement: ()=>{},
  nextStatement: ()=>{},
  currentSentenceIndex: 0,
  currentEpisodeId: '1',
  currentDialogId: '1',
};

storiesOf('Dialog', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('mode: watch', () =>
    <EpisodeScreen exit={() => {}}>
      <Dialog
        dialogMode={'watch'}
        chosenAvatarId={0}
        { ...mockProps }
        statementsCount={3}
        currentStatementIndex={0}
      />
    </EpisodeScreen>
  )
  .add('mode: explore [0]', () =>
    <EpisodeScreen exit={() => {}}>
      <Dialog
        dialogMode={'explore'}
        chosenAvatarId={0}
        { ...mockProps }
        statementsCount={3}
        currentStatementIndex={0}
      />
    </EpisodeScreen>
  )
  .add('mode: explore [1]', () =>
    <EpisodeScreen exit={() => {}}>
      <Dialog
        dialogMode={'explore'}
        chosenAvatarId={0}
        { ...mockProps }
        statementsCount={3}
        currentStatementIndex={1}
      />
    </EpisodeScreen>
  )
  .add('mode: explore [2]', () =>
    <EpisodeScreen exit={() => {}}>
      <Dialog
        dialogMode={'explore'}
        chosenAvatarId={0}
        { ...mockProps }
        statementsCount={3}
        currentStatementIndex={2}
      />
    </EpisodeScreen>
  )
  .add('mode: roleplay', () =>
    <EpisodeScreen exit={() => {}}>
      <Dialog
        dialogMode={'roleplay'}
        chosenAvatarId={1}
        { ...mockProps }
        statementsCount={3}
        currentStatementIndex={0}
      />
    </EpisodeScreen>
  );
