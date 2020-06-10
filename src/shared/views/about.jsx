import React from 'react';
import { Col, Row } from 'react-bootstrap';

function About() {
  return (
    <Row>
      <Col md={6}>
        <h2>About</h2>
        <p>
          This app is designed to work as either a client-
          or a server-rendered app. It s also designed to be
          deployed to the cloud.
        </p>
      </Col>
    </Row>
  );
}

export default About;
