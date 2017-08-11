import React from 'react';
import { storiesOf } from '@storybook/react';

// Import components
import { ElementsNav } from '../.';

storiesOf('ElementsNav', module)
  .add('twoElements: current_1', () =>
    <ElementsNav type="grammar" currentElement={1} totalElements={2} />
  )
  .add('twoElements: current_2', () =>
    <ElementsNav type="grammar" currentElement={2} totalElements={2} />
  )
  .add('threeElements: current_1', () =>
    <ElementsNav type="character" currentElement={1} totalElements={3} />
  )
  .add('threeElements: current_2', () =>
    <ElementsNav type="character" currentElement={2} totalElements={3} />
  )
  .add('threeElements: current_3', () =>
    <ElementsNav type="character" currentElement={3} totalElements={3} />
  );
