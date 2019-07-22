import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import ProjectOverview from "../../components/project/ProjectOverview";

class Project extends React.Component {
  render() {
    let id = this.props.location.pathname.split("/")[3];
    return(
      <Row>
        <Col>
          <ProjectOverview id={id} />
        </Col>
      </Row>
    );
  }
}

export default Project;