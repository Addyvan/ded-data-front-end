import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import Example from "../../components/viz/Example";

import { SizeMe } from 'react-sizeme';

class Explore extends React.Component {

  render() {
    return(
      <Row>
        <Col>
          <div style={{minWidth: "100%", minHeight: "300px"}}>
            <SizeMe
              monitorHeight
              
            >
              {
                ({ size }) => <Example width={size.width} height={size.height} />
              }
            </SizeMe>
          </div>
        </Col>
      </Row>
    );
  }

}

export default Explore;