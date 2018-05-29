import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TvShow from './TvShow';

const TvShowList = (props) => {
  const tvColOne = [];
  const tvColTwo = [];

  const tvShow = tv => (
    <TvShow
      key={tv.id}
      id={tv.id}
      img={tv.poster_path}
      name={tv.name}
      rating={tv.vote_average}
      date={tv.first_air_date}
      overview={tv.overview}
    />
  );

  const splitListInTwo = (tvShowList) => {
    const size = tvShowList.length;
    for (let index = 0; index < size; index += 1) {
      if (index % 2 === 0) {
        tvColOne.push(tvShow(tvShowList[index]));
      } else {
        tvColTwo.push(tvShow(tvShowList[index]));
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

TvShowList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    air_data: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    first_air_date: PropTypes.string,
    overview: PropTypes.string,
  })).isRequired,
};

export default TvShowList;
