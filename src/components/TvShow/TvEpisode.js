import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import noImage from './../../no-image.webp';


const TvEpisode = props => (
  <Row className="bottomGap tvEpisode">
    <Col xs={12} md={4}>
      {props.img ? (
        <img src={`https://image.tmdb.org/t/p/w342/${props.img}`} alt="Poster" />
            ) : (
              <img src={noImage} alt="No poster" />
            )}
    </Col>

    <Col xs={12} md={8}>
      <p className="title">{props.name} S{props.seasonNum}, Ep{props.episodeNum}</p>
      <p className="fontSizeMid ">{props.date}</p>
      <p className="fontSizeMid " >Rating: {props.rating}</p>
      <p>{props.overview}</p>
    </Col>
  </Row>

);

TvEpisode.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  seasonNum: PropTypes.number.isRequired,
  episodeNum: PropTypes.number.isRequired,
};


export default TvEpisode;
