import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { Form, Row, Col } from 'react-bootstrap';

export function Equipment (props){

  return (
    <div>
      {/* This is the box for equipment checkbox group */}
      <FontAwesomeIcon icon={faWeightHanging} className="hover:text-red-500" />
      <Row id="equipment-section">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Equipment</Form.Label>
            <Form.Check type="checkbox" label="Barbell" id="barbell" />
            <Form.Check type="checkbox" label={<span><FontAwesomeIcon icon={faDumbbell} /> Dumbbell</span>} id="dumbell" />
            <Form.Check type="checkbox" label="Cable Machine" id="cable-machine" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Check type="checkbox" label="Misc" id="misc" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}