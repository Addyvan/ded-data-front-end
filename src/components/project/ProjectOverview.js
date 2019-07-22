import React from "react";

import {Query} from "react-apollo";
import PROJECT_OVERVIEW from "../../gql/PROJECT_OVERVIEW";

import { Spinner } from "reactstrap";

import { 
  Card, 
  CardTitle, 
  CardText,
  Badge,
  //Row,
  //Col
} from 'reactstrap';

class ProjectOverview extends React.Component {

  render() {
    return(
      <Query query={PROJECT_OVERVIEW} variables={{id: this.props.id}}>
        {
          ({ loading, error, data }) => {
            if (loading) return (<Spinner color="primary" />);
            if (error) { console.log(error); return; }

            if (data) {
              if (data.projects.length > 0) {
                return (
                  <Card body>
                    <CardTitle><h4>{data.projects[0].name}</h4></CardTitle>
                    <CardText>{data.projects[0].description}</CardText>
                    <h4> People </h4>
                    {
                      data.projects[0].people.map((tag) => (
                        <Badge href={"/people/" + tag.id} color="info">{tag.name}</Badge>
                      ))
                    }
                    <h4>Tags</h4>
                    {
                      data.projects[0].tags.map((tag) => (
                        <Badge href={"/tags/" + tag.id} color="primary">{tag.name}</Badge>
                      ))
                    }
                    
                  </Card>
                );
              }
            }
          }
        }
      </Query>
    );
  }
}

export default ProjectOverview;