import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

export function Search(props) {

  return (
    <main className="container py-3">
      {/* <!-- This is the section for the top half of the webpage --> */}
      <Row>
        {/* This is the box for search bar and button */}
        <Col lg={6} mb={3}>
          <InputGroup>
            <Form.Control type="text" placeholder="Search" />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        {/* This is the box for body part checkbox group */}
        <Col lg={6} mb={3}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Body part</h5>
              <Row>
                {/* This is the left column of the body part group */}
                <Col sm={6} mb={2}>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Chest" id="chest" />
                    <Form.Check type="checkbox" label="Back" id="back" />
                    <Form.Check type="checkbox" label="Shoulder" id="shoulder" />
                  </Form.Group>
                </Col>
                {/* This is the right column of the body part group */}
                <Col sm={6} mb={2}>
                  <Form.Group>
                    <Form.Check type="checkbox" label="Arms" id="arms" />
                    <Form.Check type="checkbox" label="Legs" id="legs" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}