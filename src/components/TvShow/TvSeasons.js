import React from 'react';
import PropTypes from 'prop-types';

import TvSeasonsList from './TvSeasonList';

const TvSeasons = props => (
  <div>
    <h2> Seasons </h2>
    <TvSeasonsList data={props.data} tvId={props.tvId} />
  </div>

);

TvSeasons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  tvId: PropTypes.string.isRequired,
};

export default TvSeasons;
