import React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TvShows from './TvShows';

const TvNav = (props) => {
  const { match } = props;

  return (
    <div >
      <Row className="linkContainer">
        <Col xs={12} md={12} >
          <NavLink className="linkType" to={`${match.url}/top-rated`}>Top Rated</NavLink>
          <NavLink className="linkType" to={`${match.url}/popular`}>Popular</NavLink>
          <NavLink className="linkType" to={`${match.url}/on-air`}>On Air</NavLink>
          <NavLink className="linkType" to={`${match.url}/today`}>Today</NavLink>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <Switch>
            <Route
              exact
              path={match.path}
              render={() => (<Redirect to={`${match.path}/top-rated`} />)}
            />

            <Route exact path={`${match.path}/top-rated`} component={() => (<TvShows type="top_rated" />)} />

            <Route exact path={`${match.path}/popular`} component={() => (<TvShows type="popular" />)} />

            <Route exact path={`${match.path}/on-air`} component={() => (<TvShows type="on_the_air" />)} />

            <Route exact path={`${match.path}/today`} component={() => (<TvShows type="airing_today" />)} />

          </Switch>

        </Col>
      </Row>


    </div>
  );
};

TvNav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.string,
    }),
  }).isRequired,

};


export default TvNav;
