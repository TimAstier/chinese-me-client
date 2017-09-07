/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { ElementsNav } from '../.';

// ElementsNav.propTypes = {
//   type: propTypes.string.isRequired,
//   currentElement: propTypes.number,
//   totalElements: propTypes.number.isRequired,
//   onPreviousClick: propTypes.func.isRequired,
//   onNextClick: propTypes.func.isRequired
// };

const mockProps = {
  onPreviousClick: () => {},
  onNextClick: () => {}
};

storiesOf('ElementsNav', module)
  .add('1_of_2', () =>
    <ElementsNav
      type="grammar"
      currentElement={1}
      totalElements={2}
      {...mockProps}
    />
  )
  .add('2_of_2', () =>
    <ElementsNav
      type="grammar"
      currentElement={2}
      totalElements={2}
      {...mockProps}
    />
  )
  .add('1_of_3', () =>
    <ElementsNav
      type="character"
      currentElement={1}
      totalElements={3}
      {...mockProps}
    />
  )
  .add('2_of_3', () =>
    <ElementsNav
      type="character"
      currentElement={2}
      totalElements={3}
      {...mockProps}
    />
  )
  .add('3_of_3', () =>
    <ElementsNav
      type="character"
      currentElement={3}
      totalElements={3}
      {...mockProps}
    />
  )
  .add('2 lefts', () =>
    <ElementsNav
      type="exercise"
      totalElements={2}
      {...mockProps}
    />
  )
  .add('1 left', () =>
    <ElementsNav
      type="exercise"
      totalElements={1}
      {...mockProps}
    />
  )
  .add('0 lefts', () =>
    <ElementsNav
      type="exercise"
      totalElements={0}
      {...mockProps}
    />
  );
