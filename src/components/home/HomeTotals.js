import React from "react";

import { 
  Spinner,
  Row,
  Col 
} from "reactstrap";

import { Translation } from "react-i18next";

import TOTALS from "../../gql/TOTALS";

import {Query} from "react-apollo";

class HomeTotals extends React.Component {

  render() {
    return(

      <Query query={TOTALS} variables={{id: this.props.id}}>
        {
            ({ loading, error, data }) => {
                if (loading) return (<Spinner color="primary" />);
                if (error) { console.log(error); return; }

                if (data) {
                    return (
                      <Translation ns={["translation"]}>
                        {
                          (t, { i18n }) => (
                            <Row className="text-center" >
                              <Col md="12" lg="12" sm="12" style={{fontSize: "20px"}}>
                                <b>{data.counts.people}</b> people working on <b>{data.counts.projects}</b> projects across <b>{data.counts.tags}</b> digital categories
                              </Col>
                            </Row>
                          )
                        }
                      </Translation>
                    )
                }
            }
        }
      </Query>
    );
  }
}

export default HomeTotals;