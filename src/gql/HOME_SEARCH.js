import gql from "graphql-tag";

const HOME_SEARCH = gql`
  query HomeSearch {
    projects {
      id
      name
    }
  }
`;

export default HOME_SEARCH;