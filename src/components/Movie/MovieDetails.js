import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import NotFound from '../NotFound';


class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: undefined,
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = () => {
    const { id } = this.props.match.params;
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: 'e2bb53ebcddecc21c0fa81c0ce41debf',
        language: 'en-US',
      },
    })
      .then((response) => {
        this.setState({
          movieDetails: response.data,
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
    const { movieDetails } = this.state;
    if (this.state.loading) {
      return (<p>Loading</p>);
    } else if (this.state.error) {
      return (<NotFound />);
    }
    const backgroundImage = {
      background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),
      url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
      backgroundSize: 'cover',
      borderRadius: '0.2em',
      height: '100%',
      overflow: 'hidden',
    };

    return (
      <Row style={backgroundImage} className="tvShowDetails" >
        <Col xs={12} md={12}>
          <Row >
            <Col xs={12} md={4}>
              <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt="poster" />
            </Col>
            <Col xs={12} md={8}>
              <h1>{movieDetails.title}</h1>
              <h3>{movieDetails.release_date}</h3>
              <h3>Rating: {movieDetails.vote_average}</h3>
              <h3>Overview</h3>
              <h4>{movieDetails.overview}</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,

};


export default MovieDetails;
