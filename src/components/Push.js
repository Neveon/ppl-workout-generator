import React, { useState, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Context from "../context/Context";

const Push = () => {
  const workoutContext = useContext(Context);
  const { genPushWorkouts, push } = workoutContext;
  const [genMore, setGenMore] = useState(false);

  const isSelected = () => {
    setGenMore(!genMore);
  };

  const generate = () => {
    genPushWorkouts(genMore);
  };

  return (
    <div>
      <h1 className="font-weight-bold">Push</h1>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">
            &nbsp;&nbsp;Shoulders&nbsp;&nbsp;
          </p>
        </Col>
        <Col md="auto">
          <span className="font-weight-bold">Compound: </span>
          {push.shoulders.compound.join(", ") || ""}
        </Col>

        <Col md="auto">
          <span className="font-weight-bold">Isolate: </span>
          {push.shoulders.isolate.join(", ") || ""}
        </Col>
      </Row>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">&nbsp;&nbsp;Chest&nbsp;&nbsp;</p>
        </Col>
        <Col md="auto">
            <span className="font-weight-bold">Compound: </span>
            {push.chest.compound.join(", ") || ""}
        </Col>

        <Col md="auto">
            <span className="font-weight-bold">Isolate: </span>
            {push.chest.isolate.join(", ") || ""}
        </Col>
      </Row>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">&nbsp;&nbsp;Triceps&nbsp;&nbsp;</p>
        </Col>
        <Col md="auto">
            <span className="font-weight-bold">Compound: </span>
            {push.triceps.compound.join(", ") || ""}
        </Col>
        <Col md="auto">
            <span className="font-weight-bold">Isolate: </span>
            {push.triceps.isolate.join(", ") || ""}
        </Col>
      </Row>
      <br />

      <Row className="justify-content-md-center">
        <Form.Check label="Need More?" onClick={isSelected} />
        &nbsp;&nbsp;&nbsp;
        <Button variant="info" size="sm" onClick={generate}>
          Generate
        </Button>
      </Row>
      <br />
    </div>
  );
};

export default Push;
