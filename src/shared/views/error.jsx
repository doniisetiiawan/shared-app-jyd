/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Error(props) {
  return (
    <>
      <Row>
        <Col md={6}>
          <h1>Error!</h1>
        </Col>
      </Row>

      {props.children}
    </>
  );
}

export default Error;
