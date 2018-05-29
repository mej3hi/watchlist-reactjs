import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';

import TvShowList from './TvShowList';
import NotFound from './../NotFound';

class TvShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 0,
      totalPages: 0,
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getTvShows();
  }

  getTvShows = (page = 1) => {
    const { type } = this.props;
    this.setState({ loading: true });
    axios.get(`https://api.themoviedb.org/3/tv/${type}`, {
      params: {
        api_key: 'e2bb53ebcddecc21c0fa81c0ce41debf',
        language: 'en-US',
        page,
      },
    })
      .then((response) => {
        this.setState({
          page: response.data.page,
          totalPages: response.data.total_pages,
          data: response.data.results,
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
      data,
      loading,
      error,
      page,
      totalPages,
    } = this.state;

    if (loading) {
      return (<p>Loading</p>);
    } else if (error) {
      return (<NotFound />);
    }

    return (
      <div>
        <TvShowList data={data} />
        <Row>
          <Col xs={12} md={6}>
            <p>Currently on page: {page}</p>
            <p>Total page: {totalPages}</p>
          </Col>
          <Col xs={12} md={6}>
            <Button className="pagerBtn" disabled={page <= 1} onClick={() => this.getTvShows(page - 1)}> Previous </Button>
            <Button className="pagerBtn" disabled={page >= totalPages} onClick={() => this.getTvShows(page + 1)} > Next </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

TvShows.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TvShows;
