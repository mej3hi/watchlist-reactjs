import React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';

import Movies from './Movies';

const MovieNav = (props) => {
  const { match } = props;

  return (
    <div >
      <Row className="linkContainer">
        <Col xs={12} md={12} >
          <NavLink className="linkType" to={`${match.url}/top-rated`}>Top Rated</NavLink>
          <NavLink className="linkType" to={`${match.url}/popular`}>Popular</NavLink>
          <NavLink className="linkType" to={`${match.url}/upcoming`}>Upcoming</NavLink>
          <NavLink className="linkType" to={`${match.url}/now-playing`}>Now playing</NavLink>
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

            <Route exact path={`${match.path}/top-rated`} component={() => (<Movies type="top_rated" />)} />

            <Route exact path={`${match.path}/popular`} component={() => (<Movies type="popular" />)} />

            <Route exact path={`${match.path}/upcoming`} component={() => (<Movies type="upcoming" />)} />

            <Route exact path={`${match.path}/now-playing`} component={() => (<Movies type="now_playing" />)} />

          </Switch>

        </Col>
      </Row>


    </div>
  );
};

MovieNav.propTypes = {
  match: PropTypes.isRequired,
};


export default MovieNav;
