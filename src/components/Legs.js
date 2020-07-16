import React, { useState, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Context from "../context/Context";

const Legs = () => {
  const workoutContext = useContext(Context);
  const { genLegWorkouts, legs } = workoutContext;
  const [genMore, setGenMore] = useState(false);

  const isSelected = () => {
    setGenMore(!genMore);
  };

  const generate = () => {
    genLegWorkouts(genMore);
  };

  return (
    <div>
      <h1 className="font-weight-bold">Legs</h1>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">&nbsp;&nbsp;Quads&nbsp;&nbsp;</p>
        </Col>
        <Col md="auto">
          <span className="font-weight-bold">Compound: </span>
          {legs.quads.compound.join(", ") || ""}
        </Col>

        <Col md="auto">
          <span className="font-weight-bold">Isolate: </span>
          {legs.quads.isolate.join(", ") || ""}
        </Col>
      </Row>
      <br />

      <Row className="justify-content-md-center">
        <Col md={2}>
          <p className="text-light bg-dark">&nbsp;Hamstring&nbsp;</p>
        </Col>
        <Col md="auto">
            <span className="font-weight-bold">Compound: </span>
            {legs.hamstring.compound.join(", ") || ""}
        </Col>

        <Col md="auto">
            <span className="font-weight-bold">Isolate: </span>
            {legs.hamstring.isolate.join(", ") || ""}
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

export default Legs;
