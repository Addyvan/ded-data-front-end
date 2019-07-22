import React from "react";

import {
  Row,
  Col, 
  Jumbotron, 
  Button
} from 'reactstrap';

import HomeSearch from "../../components/home/HomeSearch";
import HomeTotals from "../../components/home/HomeTotals";

class Home extends React.Component {
  render() {
    return(
      <>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Mapping Digital Government</h1>
              <p className="lead">Let's specify here what the point of this is</p>
              <hr className="my-2" />
              <p>
                Technically, this service uses a Prisma GraphQL + Apollo Server backend on top of a PostgreSQL database all hosted in a kubernetes cluster.  
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <HomeTotals />
        <Row>
          <Col>
            <HomeSearch />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;