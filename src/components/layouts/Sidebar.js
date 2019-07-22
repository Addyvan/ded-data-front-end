import React from "react";
import SidebarNavItem from "./SidebarNavItem";
import GCcollab from "../../assets/logos/GCcollab.png";
//import GCconnex from "../../assets/logos/GCconnex.png";
//import GCmessage from "../../assets/logos/GC_message_interim_A_icon.png";
//import GCpedia from "../../assets/logos/GCpedia.png";
import GCtools from "../../assets/logos/GCtools.png";
import { 
  Container, 
  Row, 
  Col,
  Nav,
  DropdownItem
} from 'reactstrap';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="12" sm="12" lg="12">

            {/* GCanalytics header and divider <h4> DE Data </h4>*/}
            
            
            {/* Navigation between GCTools */}
            <Row style={{marginTop: "10px"}}>
              <Col>
                <Nav style={{marginTop: "15px", display: "block"}} vertical>

                  <DropdownItem style={{marginTop: "10px"}} header>Official Projects</DropdownItem>
                  <DropdownItem style={{marginBottom: "10px"}} divider />
                  <SidebarNavItem logo_path={GCcollab} text="Reporting" path="/"/>
                  
                  <DropdownItem style={{marginTop: "10px"}} header>Exploratory Projects</DropdownItem>
                  <DropdownItem style={{marginBottom: "10px"}} divider />
                  <SidebarNavItem style = {{family:"Nunito Sans", size: "16", color: "#707070"}} logo_path={GCtools} text="Mapping Digital Gov" path="/mapping-digital-gov" />

                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SideBar;