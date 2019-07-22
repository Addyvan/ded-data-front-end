import React from "react";

import {Query} from "react-apollo";
import TAG_OVERVIEW from "../../gql/TAG_OVERVIEW";

import { Spinner } from "reactstrap";

import { 
  Card, 
  CardTitle, 
  CardText,
  Badge
} from 'reactstrap';

class TagOverview extends React.Component {

  render() {
    return(
      <Query query={TAG_OVERVIEW} variables={{id: this.props.id}}>
        {
          ({ loading, error, data }) => {
            if (loading) return (<Spinner color="primary" />);
            if (error) { console.log(error); return; }

            if (data) {
              console.log(data);
              return (
                <Card body>
                  <CardTitle><h4>{data.tags[0].name}</h4></CardTitle>
                  <CardText>{data.tags[0].description}</CardText>
                  <h4> Projects </h4>
                  {
                    data.tags[0].projects.map((project) => (
                      <Badge href={"/projects/" + project.id} color="info">{project.name}</Badge>
                    ))
                  }
                </Card>
              )
            }
          }
        }
      </Query>
    );
  }
}

export default TagOverview;