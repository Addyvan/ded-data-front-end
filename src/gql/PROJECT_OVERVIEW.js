import gql from "graphql-tag";

const PROJECT_OVERVIEW = gql`
  query GetProject($id: String!) {
    projects(id: $id) {
      id
      name
      description
      people {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`;

export default PROJECT_OVERVIEW;