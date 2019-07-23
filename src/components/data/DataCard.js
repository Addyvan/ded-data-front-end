
import React, { Component } from 'react';
import {
  Row,
  Col, 
  Card, 
  CardText, 
  CardBody
} from 'reactstrap';

class DataCard extends Component {

  render() {
    return (
        <Card style = {{width: "237.26px", height: "98.99px", display: "inline-block", marginRight: "15.74px", marginTop: "35px"}}>
            <CardBody style = {{padding: "0px"}}>
                <CardText style = {{marginLeft: "20.43px", marginTop: "12px", marginBottom: "16.81"}}>
                    <div>
                      <i style = {{color: "#959595"}} class={this.props.picture}></i>
                      <h6 style = {{display: "inline-block", fontFamily: "Nunito Sans", fontSize: "12px", color: "#959595", marginLeft: "8.11px"}}>{this.props.title}</h6>
                    </div>
                    <Row>
                      <Col style={{fontSize: "40px", fontFamily: "Nunito Sans", color: "#137991"}}>
                        {this.props.number}
                      </Col>
                      <Col 
                        style={
                          {
                            fontSize: "30px", 
                            fontFamily: "Nunito Sans", 
                            color: (this.props.delta > 0) ? "#92CC6F" : "#AF3C43", 
                            paddingTop: "8px"
                          }
                        }
                      >
                        {
                          (this.props.delta > 0) ? 
                            "+" + this.props.delta + "%" 
                            :
                            this.props.delta + "%"
                        }
                      </Col>
                    </Row>
                </CardText>
            </CardBody>
        </Card>
        );
    }
};


export default DataCard;