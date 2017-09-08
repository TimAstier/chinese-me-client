/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Character } from '../../models';
import { EpisodeScreen, CharacterPinyin } from '../.';
import { Provider } from '../../utils/testComponents';

// CharacterPinyin.propTypes = {
//   character: propTypes.instanceOf(Character).isRequired,
//   status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
//   attemptsLeft: propTypes.number.isRequired,
//   openModal: propTypes.bool.isRequired,
//   userAnswer: propTypes.string.isRequired,
//   handleChange: propTypes.func.isRequired,
//   openFeedbackModal: propTypes.bool.isRequired
// };

const character = new Character({
  id: 1,
  simpChar: '我',
  pinyinNumber: 'wo3'
});

const mockProps = {
  handleChange: () => {},
  openFeedbackModal: false,
  character
};

storiesOf('CharacterPinyin', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('status: "question"', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterPinyin
        status={'question'}
        attemptsLeft={2}
        openModal={false}
        userAnswer=""
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('userAnswer: "test"', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterPinyin
        status={'question'}
        attemptsLeft={2}
        openModal={false}
        userAnswer="test"
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('attemptsLeft: 2', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterPinyin
        status={'question'}
        attemptsLeft={2}
        openModal
        userAnswer=""
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('attemptsLeft: 1', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterPinyin
        status={'question'}
        attemptsLeft={1}
        openModal
        userAnswer=""
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('status: "wrong"', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterPinyin
        status={'wrong'}
        attemptsLeft={1}
        openModal={false}
        userAnswer="test"
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('status: "correct"', () =>
    <EpisodeScreen exit={() => {}}>
      <CharacterPinyin
        status={'correct'}
        attemptsLeft={2}
        openModal={false}
        userAnswer="test"
        {...mockProps}
      />
    </EpisodeScreen>
  );
