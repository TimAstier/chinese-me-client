import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Word as WordComponent } from '../../components';
import { fetch as fetchWord, getChinese, getPinyint, getExplanation,
  getEnglish, getIsFetching } from '../../redux/word';
import { selectors as resourcesSelectors } from '../../redux/study';

class Word extends Component {

  render() {
    // When mounted from study route, id is defined from props
    // When mounted from resource route, id is defined from params
    return (
      <WordComponent
        fetchWord={this.props.fetchWord.bind(this)}
        id={this.props.id || this.props.params.id}
        chinese={this.props.chinese}
        pinyint={this.props.pinyint}
        explanation={this.props.explanation}
        english={this.props.english}
        isFetching={this.props.isFetching}
      />
    );
  }
}

Word.propTypes = {
  fetchWord: PropTypes.func.isRequired,
  chinese: PropTypes.string.isRequired,
  pinyint: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  english: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  params: PropTypes.object
};

function mapStateToProps(state) {
  return {
    chinese: getChinese(state),
    pinyint: getPinyint(state),
    explanation: getExplanation(state),
    english: getEnglish(state),
    isFetching: getIsFetching(state),
    id: resourcesSelectors.getResourceId(state)
  };
}

export default connect(mapStateToProps, { fetchWord })(Word);
