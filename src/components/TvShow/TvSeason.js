import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import noImage from './../../no-image.webp';

const TvSeason = props => (
  <Row className="tvSeasons">
    <Col xs={12} md={12}>
      <Row>
        <Col xs={12} md={12}>
          <NavLink className="title" to={`/tv-show-details/${props.tvId}/season/${props.seasonNum}`}>Season {props.seasonNum}</NavLink>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          {props.img ? (
            <img src={`https://image.tmdb.org/t/p/w185/${props.img}`} alt="Poster" />
            ) : (
              <img src={noImage} alt="No poster" />
            )}
        </Col>
      </Row>
    </Col>
  </Row>

);

TvSeason.propTypes = {
  seasonNum: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  tvId: PropTypes.string.isRequired,
};

export default TvSeason;
