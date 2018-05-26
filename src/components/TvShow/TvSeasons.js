import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Row, Col, H2 } from 'react-bootstrap';

import NotFound from '../NotFound';

const shorten = (str, len, ellipsis = '...') => {
  if (str.length <= len) { return str; }
  let result = str.substring(0, len - 1);
  result = result.substring(0, Math.min(result.length, result.lastIndexOf(' ')));
  return result + ellipsis;
};


class TvSeasons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: {
        episodes: [],
        name: '',
        poster_path: '',
      },
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getTvSeasons();
  }

  getTvSeasons = () => {
    const { id, season } = this.props.match.params;
    axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${season}`, {
      params: {
        api_key: 'e2bb53ebcddecc21c0fa81c0ce41debf',
        language: 'en-US',
      },
    })
      .then((response) => {
        this.setState({
          seasons: response.data,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  seasonsList = () => {
    const { episodes } = this.state.seasons;
    const seasons = episodes.map(data => (
      <Row className="tvshow">
        <Col xs={12} md={4}>
          <img src={`https://image.tmdb.org/t/p/w185/${data.still_path}`} alt="logo" />
        </Col>

        <Col xs={12} md={8}>
          <p className="title">{data.name}</p>
          <p className="fontSizeMid ">{data.air_data}</p>
          <p className="fontSizeMid " >Rating: {data.vote_average}</p>
          <p>S{data.season_number}, Ep{data.episode_number}</p>
          <p>{shorten(data.overview, 200)}</p>
        </Col>
      </Row>
    ));
    return seasons;
  }


  render() {
    if (this.state.loading) {
      return (<p>Loading</p>);
    } else if (this.state.error) {
      return (<NotFound />);
    }

    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
            <H2>{this.state.name}</H2>
          </Col>
        </Row>
        {this.seasonsList}
      </div>
    );
  }
}

TvSeasons.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
      season: PropTypes.number,
    }),
  }).isRequired,

};

export default TvSeasons;
