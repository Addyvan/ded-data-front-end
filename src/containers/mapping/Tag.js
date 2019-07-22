import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import TagOverview from "../../components/tags/TagOverview";

class Tag extends React.Component {
  render() {
    let id = this.props.location.pathname.split("/")[3];
    return(
      <Row>
        <Col>
          <TagOverview id={id} />
        </Col>
      </Row>
    );
  }
}

export default Tag;