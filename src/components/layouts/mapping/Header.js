import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

import { Translation } from "react-i18next";

class Header extends React.Component {

  render() {
    return(
      <Translation ns={["translation"]}>
        {
          (t, { i18n }) => (
            <Row style={{marginBottom: "15px", marginTop: "0px"}}>
              <Col md="12" lg="12">
                <Navbar color="dark" dark expand="md">
                  <NavbarBrand href="/mapping-digital-gov">Derek Bot 5000</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/mapping-digital-gov/explore">Explore</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/mapping-digital-gov/add-project">Add Project</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/addyvan/mapping-digital-government">GitHub</NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </Col>
            </Row>
          )
        }
      </Translation>
    );
  }
}

export default Header;