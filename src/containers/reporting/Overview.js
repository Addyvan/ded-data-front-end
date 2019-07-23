import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import OverviewContent from "../../components/reporting/OverviewContent";

class Overview extends React.Component {

  render() {
    return(
      <>
        <OverviewContent month={6} />
      </>
    );
  }

}

export default Overview;