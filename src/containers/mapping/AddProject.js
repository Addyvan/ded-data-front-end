import React from "react";

import {withRouter} from "react-router-dom";

import AddProjectStep0 from "../../components/addproject/AddProjectStep0";
import AddProjectStep1 from "../../components/addproject/AddProjectStep1";
import AddProjectStep2 from "../../components/addproject/AddProjectStep2";
import AddProjectStep3 from "../../components/addproject/AddProjectStep3";

import {
  Row,
  Col
} from "reactstrap";

class AddProject extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      projectId: null
    };

    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
    this.submit = this.submit.bind(this);
    this.setProjectid = this.setProjectid.bind(this);
    this.renderStep = this.renderStep.bind(this);
  }

  setProjectid(id) {
    this.setState({projectId: id});
  }

  continue(currentStep) {
    this.setState({
      activeStep: currentStep + 1
    });
  }

  back(currentStep) {
    this.setState({
      activeStep: currentStep - 1
    });
  }

  submit() {
    this.props.history.push("/projects/" + this.state.projectId);
  }

  renderStep() {
    switch(this.state.activeStep) {
      case 0:
        return <AddProjectStep0 continueAction={this.continue} />;
      case 1:
        return <AddProjectStep1 continueAction={this.continue} setProjectId={this.setProjectid} />;
      case 2:
        return <AddProjectStep2 continueAction={this.continue} projectId={this.state.projectId} />;
      case 3:
        return <AddProjectStep3 submitAction={this.submit} projectId={this.state.projectId}/>;
      default: break;
    }
  }

  render() {
    return(
      <>
        <Row style={{marginBottom: "20px"}} className="text-center">
          <Col>
            <div className="float-center">
              <div aria-label="progress" className="step-indicator" style={{marginLeft: "15px"}}>
                <ul className="steps">
                  <li
                    key={`step-0`}
                    className={`${(this.state.activeStep === 0) ? 'active' : ''}`}
                  >
                    Purpose
                  </li>
                  <li
                    key={`step-1`}
                    className={`${(this.state.activeStep === 1) ? 'active' : ''}`}
                  >
                    Project Information
                  </li>
                  <li
                    key={`step-2`}
                    className={`${(this.state.activeStep === 2) ? 'active' : ''}`}
                  >
                    People
                  </li>
                  <li
                    key={`step-3`}
                    className={`${(this.state.activeStep === 3) ? 'active' : ''}`}
                  >
                    Tags
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        {this.renderStep()}
      </>
    );
  }
}

export default withRouter(AddProject);