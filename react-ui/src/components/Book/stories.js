/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Episode, Season } from '../../models';
// import Sentence from '../../models/Sentence';
import { Book } from '../.';
import { Provider } from '../../utils/testComponents';
import { bookComponents as c } from '../.';

const season = new Season();
const episode = new Episode();

class Content extends React.Component {
  render() {
    const { newCharacters, example, lessonTitle, dialog, character,
      characterIds, practiceIds, image } = this.props;
    return (
      // ** Modify test content here **
      <c.Page>
        <c.P>Hello World!</c.P>
      </c.Page>
      // ** END of test content **
    );
  }
};

storiesOf('Book', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('Book', () =>
    <Book
      content={Content}
      initialized
      settings={{}}
      images={[]}
      season={season}
      episode={episode}
    />
  );
