import React, { Component, PropTypes } from 'react';
import { Image, Button, Icon } from 'semantic-ui-react';
import logo from '../../logo.png';

class GrammarScreen extends Component {
  render() {
    return (
      <div id="study-screen">

        <div id="left-sidebar">
          <div id="coach">
            <Image
              id="coach-img"
              src={logo}
              alt="ChineseMe logo"
              shape="circular"
              centered
              size="tiny"
            />
            <div className="comment">
              <p>Here is another usage of the character 有 yǒu, previously
              seen in lesson 2.</p>
            </div>
          </div>
        </div>

        <div id="main-content">

          <div className="explanation">
            <h1>有, yǒu meaning to have</h1>
            <p>
              有, yǒu, can mean either to have, or there is, depending
              on context. With a noun or pronoun, it means have.
            </p>
          </div>

          <div className="sentences">

            <div className="grammar-sentence">
              <div className="chinese">我有三本书。</div>
              <div className="translation">I have three books.</div>
              <div className="rawtranslation">(I HAVE THREE ROOT-OF BOOK.)</div>
            </div>

            <div className="grammar-sentence">
              <div className="chinese">它有两个名字。</div>
              <div className="translation">It has two names.</div>
              <div className="rawtranslation">(IT HAVE TWO PIECE-OF NAME.)</div>
            </div>

            <div className="grammar-sentence">
              <div className="chinese">她也有中文名字吗？</div>
              <div className="translation">Does she have a Chinese name, too?</div>
              <div className="rawtranslation">(SHE HAVE CHINESE NAME YES/NO?)</div>
            </div>

            <div className="grammar-sentence">
              <div className="chinese">她也有中文名字吗？</div>
              <div className="translation">Does she have a Chinese name, too?</div>
              <div className="rawtranslation">(SHE HAVE CHINESE NAME YES/NO?)</div>
            </div>

            <div className="grammar-sentence">
              <div className="chinese">她也有中文名字吗？</div>
              <div className="translation">Does she have a Chinese name, too?</div>
              <div className="rawtranslation">(SHE HAVE CHINESE NAME YES/NO?)</div>
            </div>

            <div className="grammar-sentence">
              <div className="chinese">她也有中文名字吗？</div>
              <div className="translation">Does she have a Chinese name, too?</div>
              <div className="rawtranslation">(SHE HAVE CHINESE NAME YES/NO?)</div>
            </div>
          </div>

        </div>

        <div id="right-sidebar">
          <div id="user-feedback">
            <Button primary size="big">
              <Icon name="external square" />
              Continue
            </Button>
            <Button secondary size="big">
              <Icon name="help circle" />
              Ask question
            </Button>
            <Button basic size="big">
              <Icon name="send" />
              Report error
            </Button>
            <Button basic size="big">
              <Icon name="bug" />
              Report bug
            </Button>
          </div>
        </div>

      </div>
    );
  }
}

GrammarScreen.propTypes = {
  params: PropTypes.object.isRequired
};

export default GrammarScreen;
