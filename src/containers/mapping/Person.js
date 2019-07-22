import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import PersonOverview from "../../components/people/PersonOverview";

class Person extends React.Component {
  render() {
    let id = this.props.location.pathname.split("/")[3];
    return(
      <Row>
        <Col>
          <PersonOverview id={id} />
        </Col>
      </Row>
    );
  }
}

export default Person;