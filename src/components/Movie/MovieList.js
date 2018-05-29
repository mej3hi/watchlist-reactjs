import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import Movie from './Movie';


const MovieList = (props) => {
  const tvColOne = [];
  const tvColTwo = [];

  const movie = m => (
    <Movie
      key={m.id}
      id={m.id}
      img={m.poster_path}
      name={m.title}
      rating={m.vote_average}
      date={m.release_date}
      overview={m.overview}
    />
  );

  const splitListInTwo = (list) => {
    const size = list.length;
    for (let index = 0; index < size; index += 1) {
      if (index % 2 === 0) {
        tvColOne.push(movie(list[index]));
      } else {
        tvColTwo.push(movie(list[index]));
      }
    }
  };

  splitListInTwo(props.data);

  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          { tvColOne }
        </Col>
        <Col xs={12} md={6}>
          { tvColTwo }
        </Col>
      </Row>
    </div>

  );
};

MovieList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  })).isRequired,
};


export default MovieList;
