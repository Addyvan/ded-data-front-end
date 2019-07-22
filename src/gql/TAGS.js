import gql from "graphql-tag";

const TAGS = gql`
  query TagsForInput {
    tags {
      id
      name
    }
  }
`;

export default TAGS;