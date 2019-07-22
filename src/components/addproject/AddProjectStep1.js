import React from "react";

import PropTypes from "prop-types";

import {
  Row,
  Col,
  Button,
  Input,
  Label,
  Alert
} from "reactstrap";

import { Mutation } from "react-apollo";
import CREATE_PROJECT from "../../gql/CREATE_PROJECT";


class AddProjectStep1 extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e, field) {
    let value = e.target.value;

    if (field === "name") {
      this.setState({
        name: value
      });
    } else if(field === "description") {
      this.setState({
        description: value
      });
    }

  }

  render() {
    return(
      <Mutation mutation={CREATE_PROJECT} >
        {
          (CreateProject, { loading, error, data }) => {

            if (data) {
              this.props.setProjectId(data.createProject.id);
              this.props.continueAction(1);
            }
            let showError = false;
            let errors = [];
            if (error) {
              if (error.graphQLErrors) {
                showError = true;
                error.graphQLErrors.map((e) => {
                  errors.push({
                    msg: e.message
                  })
                })
              }
            }

            return(
              <>
                <Row>
                  <Col>
                    <h2>Project Details</h2>
                    <Label htmlFor="nameTest" style={{minWidth: "50%"}}>
                      <span className="font-weight-bold">Project Name</span>
                      <Input
                        required
                        type="text"
                        className="form-control"
                        value={this.state.name || ''}
                        onChange={(e) => {this.onChange(e, "name")}}
                      />
                    </Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {
                      (showError) ? 
                        <>
                          {
                            errors.map((e) => (
                              <Alert color="danger">
                                {e.msg}
                              </Alert> 
                            ))
                          }
                        </>
                        : ""
                    }
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label htmlFor="phoneTest" style={{minWidth: "80%"}}>
                      <span className="font-weight-bold">Project Description</span>
                      <Input
                        required
                        type="textarea"
                        className="form-control"
                        value={this.state.description || ''}
                        onChange={(e) => {this.onChange(e, "description")}}
                        style={{height: "200px"}}
                      />
                    </Label>
                  </Col>
                </Row>
                <Row>
                  <Col md="9" />
                  <Col md="3">
                    <div className="float-right">
                      <Button 
                        onClick={() => CreateProject(
                          { 
                            variables: {
                              name: this.state.name,
                              description: this.state.description
                            }
                          })}
                      >Create</Button>
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

AddProjectStep1.propTypes = {
  continueAction: PropTypes.func,
  setProjectId: PropTypes.func
}

export default AddProjectStep1;