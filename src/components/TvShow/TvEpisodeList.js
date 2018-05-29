import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TvEpisode from './TvEpisode';

const TvEpisodeList = (props) => {
  const episode = tv => (
    <TvEpisode
      key={tv.id}
      id={tv.id}
      name={tv.name}
      rating={tv.vote_average}
      overview={tv.overview}
      date={tv.air_date}
      img={tv.still_path}
      seasonNum={tv.season_number}
      episodeNum={tv.episode_number}
    />
  );

  const episodeList = () => {
    const { data } = props;
    const seasons = data.map(d => (
      episode(d)
    ));
    return seasons;
  };

  return (
    <div>
      <Row>
        <Col xs={12} md={12}>
          {episodeList()}
        </Col>
      </Row>
    </div>

  );
};

TvEpisodeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    air_date: PropTypes.string,
    still_path: PropTypes.string,
    season_number: PropTypes.number,
    episode_number: PropTypes.number,
  })).isRequired,
};

export default TvEpisodeList;
