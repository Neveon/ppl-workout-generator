import React, { useState, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Context from "../context/Context";

const Pull = () => {
  const workoutContext = useContext(Context);
  const { genPullWorkouts, pull } = workoutContext;
  const [genMore, setGenMore] = useState(false);

  const isSelected = () => {
    setGenMore(!genMore);
  };

  const generate = () => {
    genPullWorkouts(genMore);
  };

  return (
    <div>
      <h1 className="font-weight-bold">Pull</h1>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">
            &nbsp;&nbsp;Shoulders&nbsp;&nbsp;
          </p>
        </Col>
        <Col md="auto">
          <span className="font-weight-bold">Compound: </span>
          {pull.shoulders.compound.join(", ") || ""}
        </Col>

        <Col md="auto">
          <span className="font-weight-bold">Isolate: </span>
          {pull.shoulders.isolate.join(", ") || ""}
        </Col>
      </Row>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">&nbsp;&nbsp;Back&nbsp;&nbsp;</p>
        </Col>
        <Col md="auto">
          <span className="font-weight-bold">Compound: </span>
          {pull.back.compound.join(", ") || ""}
        </Col>

        <Col md="auto">
          <span className="font-weight-bold">Isolate: </span>
          {pull.back.isolate.join(", ") || ""}
        </Col>
      </Row>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">&nbsp;&nbsp;Biceps&nbsp;&nbsp;</p>
        </Col>
        <Col md="auto">
          <span className="font-weight-bold">Compound: </span>
          {pull.biceps.compound.join(", ") || ""}
        </Col>
        <Col md="auto">
          <span className="font-weight-bold">Isolate: </span>
          {pull.biceps.isolate.join(", ") || ""}
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

export default Pull;
