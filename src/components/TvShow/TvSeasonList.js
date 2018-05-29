import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TvSeason from './TvSeason';

const TvSeasonList = (props) => {
  const tvColOne = [];
  const tvColTwo = [];
  const tvColThree = [];
  const tvColFour = [];

  const tvSeason = tv => (
    <TvSeason
      key={tv.id}
      id={tv.id}
      img={tv.poster_path}
      seasonNum={tv.season_number}
      date={tv.air_date}
      tvId={props.tvId}
    />
  );

  const splitListInFour = (list) => {
    const size = list.length;
    let count = 1;
    for (let index = 0; index < size; index += 1) {
      if (count === 1) {
        tvColOne.push(tvSeason(list[index]));
        count += 1;
      } else if (count === 2) {
        tvColTwo.push(tvSeason(list[index]));
        count += 1;
      } else if (count === 3) {
        tvColThree.push(tvSeason(list[index]));
        count += 1;
      } else {
        tvColFour.push(tvSeason(list[index]));
        count = 1;
      }
    }
  };

  splitListInFour(props.data);

  return (
    <div>
      <Row>
        <Col xs={12} md={3}>
          { tvColOne }
        </Col>
        <Col xs={12} md={3}>
          { tvColTwo }
        </Col>
        <Col xs={12} md={3}>
          { tvColThree }
        </Col>
        <Col xs={12} md={3}>
          { tvColFour }
        </Col>
      </Row>
    </div>

  );
};

TvSeasonList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    air_data: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    season_number: PropTypes.number,
  })).isRequired,
  tvId: PropTypes.string.isRequired,
};


export default TvSeasonList;
