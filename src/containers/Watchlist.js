import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import NavbarTop from './../components/NavbarTop';
import TvDetails from './../components/TvShow/TvDetails';
import MovieDetails from './../components/Movie/MovieDetails';
import MovieNav from './../components/Movie/MovieNav';
import Home from './../components/Home';
import Footer from './../components/Footer';
import NotFound from './../components/NotFound';
import TvNav from './../components/TvShow/TvNav';


class Watchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Grid >
          <NavbarTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tvshows" component={TvNav} />
            <Route path="/movies" component={MovieNav} />
            <Route path="/tv-show-details/:id" component={TvDetails} />
            <Route path="/movie-details/:id" component={MovieDetails} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Grid>
      </BrowserRouter>
    );
  }
}

export default Watchlist;
