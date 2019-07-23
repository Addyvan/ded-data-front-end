import React from "react";
import PropTypes from "prop-types";

import DataCard from "../data/DataCard";

import {Query} from "react-apollo";
import GET_PERIOD from "../../gql/reporting/GET_PERIOD";

import {
  Row,
  Col,
  Spinner
} from "reactstrap";

class OverviewContent extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <Query query={GET_PERIOD} variables={{month: this.props.month}}>
        {
          ({ loading, error, data }) => {
            if (loading) return (<Spinner color="primary" />);
            if (error) { console.log(error); return; }

            if (data) {
              console.log(data);
              let currentUserRegistrations = 0;
              let pastUserRegistrations = 0;
              for (let i = 0; i < data.periods.length; i++) {
                if (data.periods[i].year == 2018) {
                  currentUserRegistrations = data.periods[i].collab.numNewAccounts;
                } else {
                  pastUserRegistrations = data.periods[i].collab.numNewAccounts;
                }
              }

              let delta = Math.round( (currentUserRegistrations/pastUserRegistrations - 1) * 100, 2 );

              //delta = -19;

              return (
                <>
                <Row>
                  <Col>
                    <h4>June 2018</h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <DataCard picture={"fas fa-users"} title={"User Registrations"} number={currentUserRegistrations} delta={delta} />
                  </Col>
                </Row>
                </>
              )
            }
          }
        }
      </Query>
    );
  }
}

OverviewContent.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number
};

export default OverviewContent;