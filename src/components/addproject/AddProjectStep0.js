import React from "react";

import PropTypes from "prop-types";

import {
  Row,
  Col,
  Button
} from "reactstrap";

class AddProjectStep0 extends React.Component {
  render() {
    return(
      <>
        <Row>
          <Col>
            <h2>Derek Bot 5000's pledge</h2>
            <p className="purpose-text">
              Derek Bot 5000 is committed to sucking all the knowledge out of Derek in order to automate him and distribute his knowledge throughout society.
            </p>
            <p className="purpose-text">
              For only a dollar a day, you can put Derek out of a job.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="9" />
          <Col md="3">
            <div className="float-right">
              <Button onClick={() => this.props.continueAction(0) }>Get Started</Button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

AddProjectStep0.propTypes = {
  continueAction: PropTypes.func
}

export default AddProjectStep0;