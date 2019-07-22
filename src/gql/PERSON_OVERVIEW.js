import gql from "graphql-tag";

const PERSON_OVERVIEW = gql`
  query GetPerson($id: String!) {
    people(id: $id) {
      id
      name
      projects {
        id
        name
      }
    }
  }
`;

export default PERSON_OVERVIEW;