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
import ADD_TAGS_TO_PROJECT from "../../gql/ADD_TAGS_TO_PROJECT";
import TAGS from "../../gql/TAGS";
import SmartInput from "./SmartInput";
import buildIndex from "./buildIndex";

class AddProjectStep3 extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tagId: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {

    this.setState({
      tagId: e
    });

  }

  render() {
    return(
      <Mutation mutation={ADD_TAGS_TO_PROJECT} >
        {
          (TagProject, { data }) => {

            if (data) {
              this.props.submitAction();
            }

            return(         
              <>
                <Row>
                  <Col>
                    <Label htmlFor="phoneTest" style={{minWidth: "80%"}}>
                      <span className="font-weight-bold">Tags</span>
                      <Query query={TAGS}>
                        {
                          ({ loading, error, data }) => {
                            if (loading) return (<Spinner color="primary" />);
                            if (error) { console.log(error); return; }

                            if (data) {
                              if (data.tags) {
                                const {index, searchValues} = buildIndex(data.tags);
                                return(
                                  <SmartInput
                                    placeholder="Tag"
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
                  </Col>
                </Row>
                <Row>
                  <Col md="9" />
                  <Col md="3">
                    <div className="float-right">
                      <Button 
                        onClick={() => TagProject(
                          { 
                            variables: {
                              tagId: this.state.tagId,
                              projectId: this.props.projectId
                            }
                          })}
                      >Tag Project</Button>
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

AddProjectStep3.propTypes = {
  submitAction: PropTypes.func,
  projectId: PropTypes.string
}

export default AddProjectStep3;