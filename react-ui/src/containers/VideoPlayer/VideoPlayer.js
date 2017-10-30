import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { VideoPlayer as VideoPlayerComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class VideoPlayer extends Component {

  render() {
    return (
      <VideoPlayerComponent
        width={this.props.width}
        height={this.props.height}
        autoPlay={this.props.autoPlay}
        src={this.props.src}
        onEnded={() => this.props.videoEnded(this.props.src)}
      />
    );
  }
}

VideoPlayer.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  autoPlay: propTypes.bool,
  src: propTypes.string,
  videoEnded: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  autoPlay: selectors.getAutoPlay(state)
});

export default connect(
  mapStateToProps,
  {
    videoEnded: sagaActions.videoEnded
  }
)(VideoPlayer);
