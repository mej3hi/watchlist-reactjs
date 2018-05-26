import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';


const shorten = (str, len, ellipsis = '...') => {
  if (str.length <= len) { return str; }
  let result = str.substring(0, len - 1);
  result = result.substring(0, Math.min(result.length, result.lastIndexOf(' ')));
  return result + ellipsis;
};

const TvShow = props => (
  <Row className="tvshow">
    <Col xs={12} md={4}>
      <img src={`https://image.tmdb.org/t/p/w185/${props.img}`} alt="logo" />
    </Col>

    <Col xs={12} md={8}>
      <p className="title">{props.name}</p>
      <p className="fontSizeMid ">{props.date}</p>
      <p className="fontSizeMid " >Rating: {props.rating}</p>
      <p>{shorten(props.overview, 200)}</p>
      <NavLink to={`/tv-show-details/${props.id}`}>More info</NavLink>
    </Col>
  </Row>

);

TvShow.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};


export default TvShow;
