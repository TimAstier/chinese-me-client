import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollableWrapper } from '../../containers';
import * as models from '../../models';
import styled from 'styled-components';
import { ContentHOC } from '../.';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import iconPlayAudio from '../../images/iconPlayAudio.svg';
import iconAudioPlayingA from '../../images/iconAudioPlayingA.svg';
import iconAudioPlayingB from '../../images/iconAudioPlayingB.svg';
import iconAudioPlayingC from '../../images/iconAudioPlayingC.svg';
import spinner from '../../images/spinner.svg';
import { Spinner } from '../.';
import { Page } from './components';

// react-preloaded is a forw of react-preload which seems abandonned and not
// up-to-date with the latest releases of react
// see https://github.com/sambernard/react-preload/pull/23
const Preload = require('react-preloaded').Preload;

const Header = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class Book extends Component {
  _renderContent() {
    const Content = this.props.content;
    if (this.props.initialized) {
      // Preloading images allow to calculate correct scrollPosition in
      // scrollableWrapper.
      return (
        <Preload
          loadingIndicator={
            <Page>
              <SpinnerWrapper>
                <Spinner />
              </SpinnerWrapper>
            </Page>
          }
          images={
            this.props.images.map(image => assetEndpointToUrl('/images/' + image)).concat([iconPlayAudio, iconAudioPlayingA, iconAudioPlayingB, iconAudioPlayingC, spinner])
          }
        >
          <ContentHOC
            season={this.props.season}
            episode={this.props.episode}
            nextEpisode={this.props.nextEpisode}
            content={Content}
            images={this.props.images}
          />
        </Preload>
      );
    }
    return (
      <Page>
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      </Page>
    );
  }

  render() {
    return (
      <ScrollableWrapper>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section>
              <Link to="/course">Course</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section>
              <Link to={`/course/season/${this.props.params.seasonNumber}`}>
                {`Season ${this.props.params.seasonNumber}`}
              </Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section active>
              {`Episode ${this.props.params.episodeNumber}`}
            </Breadcrumb.Section>
          </Breadcrumb>
        </Header>
        { this._renderContent() }
      </ScrollableWrapper>
    );
  }
}

Book.propTypes = {
  content: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  season: propTypes.instanceOf(models.Season),
  episode: propTypes.instanceOf(models.Episode),
  nextEpisode: propTypes.instanceOf(models.Episode),
  images: propTypes.array,
  params: propTypes.object.isRequired
};

export default Book;
