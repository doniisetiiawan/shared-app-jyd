import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <Row>
      <Col md={6}>
        <h2>Welcome to my server-rendered app</h2>
        <h3>Check out these links</h3>
        <ul>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Index;
