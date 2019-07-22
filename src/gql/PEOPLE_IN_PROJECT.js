import gql from "graphql-tag";

const PEOPLE_IN_PROJECT = gql`
  query GetPeopleInProject($projectId: String!) {
    projects(id: $projectId) {
      id
      people {
        id
        name
      }
    }
  }
`;

export default PEOPLE_IN_PROJECT;