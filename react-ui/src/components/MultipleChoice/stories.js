/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from '../../utils/testComponents';
import { EpisodeScreen, MultipleChoice } from '../.';

// MultipleChoice.propTypes = {
//   question: propTypes.string.isRequired,
//   choices: propTypes.array.isRequired,
//   status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
//   userAnswer: propTypes.number,
//   correctAnswer: propTypes.oneOf([0, 1, 2]).isRequired,
//   explanation: propTypes.string.isRequired
//   setUserAnswer: propTypes.func.isRequired,
// };


const mockProps = {
  setUserAnswer: () => {}
};

storiesOf('MultipleChoice', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('question', () =>
    <EpisodeScreen exit={() => {}}>
      <MultipleChoice
        question="我___马文。"
        choices={['叫', '会', '姓']}
        status="question"
        userAnswer={null}
        correctAnswer={0}
        explanation="叫 is used for full names"
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('question: userAnswer', () =>
    <EpisodeScreen exit={() => {}}>
      <MultipleChoice
        question="我___马文。"
        choices={['叫', '会', '姓']}
        status="question"
        userAnswer={1}
        correctAnswer={0}
        explanation="叫 is used for full names"
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('wrong', () =>
    <EpisodeScreen exit={() => {}}>
      <MultipleChoice
        question="我___马文。"
        choices={['叫', '会', '姓']}
        status="wrong"
        userAnswer={1}
        correctAnswer={0}
        explanation="叫 is used for full names"
        {...mockProps}
      />
    </EpisodeScreen>
  )
  .add('correct', () =>
    <EpisodeScreen exit={() => {}}>
      <MultipleChoice
        question="我___马文。"
        choices={['叫', '会', '姓']}
        status="correct"
        userAnswer={0}
        correctAnswer={0}
        explanation="叫 is used for full names"
        {...mockProps}
      />
    </EpisodeScreen>
  );
