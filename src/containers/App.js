import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import NavbarTop from './../components/NavbarTop';
import TvDetails from './../components/TvShow/TvDetails';
import MovieDetails from './../components/Movie/MovieDetails';
import MovieNav from './../components/Movie/MovieNav';
import Footer from './../components/Footer';
import NotFound from './../components/NotFound';
import TvNav from './../components/TvShow/TvNav';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid >
          <NavbarTop />
          <div className="mainView">
            <Switch >
              <Route
                exact
                path="/"
                render={() => (<Redirect to="/tvshows" />)}
              />
              <Route path="/tvshows" component={TvNav} />
              <Route path="/movies" component={MovieNav} />
              <Route path="/tv-show-details/:id" component={TvDetails} />
              <Route path="/movie-details/:id" component={MovieDetails} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
