import gql from "graphql-tag";

const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      id
    }
  }
`;

export default CREATE_PROJECT;