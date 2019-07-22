import React from "react";

import PropTypes from "prop-types";

import {
  Row,
  Col,
  Button,
  Label,
  Spinner
} from "reactstrap";

import { Mutation, Query } from "react-apollo";
import ADD_PEOPLE_TO_PROJECT from "../../gql/ADD_PEOPLE_TO_PROJECT";
//import PEOPLE_IN_PROJECT from "../../gql/PEOPLE_IN_PROJECT";
import PEOPLE from "../../gql/PEOPLE";
import SmartInput from "./SmartInput";
import buildIndex from "./buildIndex";

class AddProjectStep2 extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      personId: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {

    this.setState({
      personId: e
    });

  }

  render() {
    return(
      <Mutation mutation={ADD_PEOPLE_TO_PROJECT} >
        {
          (linkPersonProject, { data }) => {

            if (data) {
              let person = {
                id: data.linkPersonProject.id,
                name: data.linkPersonProject.name
              }
              document.getElementById("people_id").innerHTML += " " + person.name + "<br></br>";
            }

            return(         
              <>
                <Row>
                  <Col>
                    <Label htmlFor="phoneTest" style={{minWidth: "80%"}}>
                      <span className="font-weight-bold">People</span>
                      
                      <div id="people_id"></div>
                              
                      <Query query={PEOPLE}>
                        {
                          ({ loading, error, data }) => {
                            if (loading) return (<Spinner color="primary" />);
                            if (error) { console.log(error); return; }

                            if (data) {
                              if (data.people) {
                                const {index, searchValues} = buildIndex(data.people);
                                return(
                                  <SmartInput
                                    placeholder="Person"
                                    section="desktop"
                                    searchIndex={index}
                                    searchValues={searchValues}
                                    onChange={this.onChange}
                                  />
                                );
                              } else {
                                return (<div>ERROR: QUERY FAILED</div>);
                              }
                            }
                          }
                        }
                      </Query>
                    </Label>
                    <Button 
                        onClick={() => linkPersonProject(
                          { 
                            variables: {
                              personId: this.state.personId,
                              projectId: this.props.projectId
                            }
                          })}
                      >Add Person To Project</Button>
                  </Col>
                </Row>
                <Row>
                  <Col md="9" />
                  <Col md="3">
                    <div className="float-right">
                      <Button onClick={() => this.props.continueAction(2)}>Continue</Button>
                    </div>
                  </Col>
                </Row>
              </>
            )
          }
        }
      </Mutation>
    );
  }
}

AddProjectStep2.propTypes = {
  continueAction: PropTypes.func,
  projectId: PropTypes.string
}

export default AddProjectStep2;