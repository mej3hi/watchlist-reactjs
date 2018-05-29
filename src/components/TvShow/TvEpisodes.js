import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TvEpisodesList from './TvEpisodeList';
import NotFound from '../NotFound';

class TvEpisodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getTvEpisodes();
  }

  getTvEpisodes = () => {
    const { id, seasonNum } = this.props.match.params;
    axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}`, {
      params: {
        api_key: 'e2bb53ebcddecc21c0fa81c0ce41debf',
        language: 'en-US',
      },
    })
      .then((response) => {
        this.setState({
          episodes: response.data.episodes,
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


  render() {
    const {
      episodes,
      loading,
      error,
    } = this.state;
    if (loading) {
      return (<p>Loading</p>);
    } else if (error) {
      return (<NotFound />);
    }

    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <h2>Episodes</h2>
            {<TvEpisodesList data={episodes} />}
          </Col>
        </Row>
      </div>
    );
  }
}

TvEpisodes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      seasonNum: PropTypes.string,
    }),
  }).isRequired,

};

export default TvEpisodes;
