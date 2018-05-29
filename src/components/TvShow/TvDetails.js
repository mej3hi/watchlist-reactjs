import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TvEpisodes from './TvEpisodes';
import TvSeasons from './TvSeasons';
import NotFound from '../NotFound';


class TvDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvDetails: {
        seasons: [],
      },
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getTvDetails();
  }

  getTvDetails = () => {
    const { id } = this.props.match.params;
    this.setState({ loading: true });
    axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
      params: {
        api_key: 'e2bb53ebcddecc21c0fa81c0ce41debf',
        language: 'en-US',
      },
    })
      .then((response) => {
        this.setState({
          tvDetails: response.data,
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
    const { id } = this.props.match.params;
    const { tvDetails } = this.state;
    if (this.state.loading) {
      return (<p>Loading</p>);
    } else if (this.state.error) {
      return (<NotFound />);
    }

    const backgroundImage = {
      background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),
      url(https://image.tmdb.org/t/p/w1280${tvDetails.backdrop_path})`,
      backgroundSize: 'cover',
      borderRadius: '0.2em',
      height: '100%',
      overflow: 'hidden',
    };

    return (
      <div>
        <Row style={backgroundImage} className="details" >
          <Col xs={12} md={12}>
            <Row >
              <Col xs={12} md={4}>
                <img src={`https://image.tmdb.org/t/p/w342${tvDetails.poster_path}`} alt="Poster" />
              </Col>
              <Col xs={12} md={8}>
                <h1>{tvDetails.name}</h1>
                <h3>Relesed: {tvDetails.first_air_date}</h3>
                <h3>Rating: {tvDetails.vote_average}</h3>
                <h3>Overview</h3>
                <h4>{tvDetails.overview}</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Switch>
              <Route
                exact
                path={this.props.match.path}
                render={() => (<TvSeasons data={tvDetails.seasons} tvId={id} />)}
              />
              <Route
                exact
                path={`${this.props.match.path}/season/:seasonNum`}
                component={TvEpisodes}
              />
            </Switch>
          </Col>
        </Row>
      </div>

    );
  }
}

TvDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
  }).isRequired,

};

export default TvDetails;
