import React from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";
import Sidebar from "../components/layouts/Sidebar";

const DefaultLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col
        lg="2"
        md="3"
        sm="12"
        style={{paddingTop: "10px"}}
        className="flex-grow-1" // fixed-top classname
      >
      <Sidebar />
      </Col>
      <Col
          lg="10"
          md="9"
          sm="12"
          className="flex-grow-1 content right"
          style={{paddingTop: "25px"}}
        >
        {children}
      </Col>
    </Row>
  </Container>
);

export default DefaultLayout;