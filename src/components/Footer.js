import React from 'react';
import { Row, Col } from 'react-bootstrap';
import tmbpLogo from './../powered_by_the_movie_database_icon.png'

const Footer = () => (
  <Row className="footer">
    <Col xs={12} md={4}>
      <img src={tmbpLogo} alt="logo" />
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
    </Col>
  </Row>

);

export default Footer;
