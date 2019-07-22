import gql from "graphql-tag";

const TAG_OVERVIEW = gql`
  query GetTag($id: String!) {
    tags(id: $id) {
      id
      name
      projects {
        id
        name
      }
    }
  }
`;

export default TAG_OVERVIEW;