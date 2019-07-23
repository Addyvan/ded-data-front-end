import gql from "graphql-tag";

const TOTALS = gql`
  query Totals {
    counts {
      people
      projects
      tags
    }
  }
`;

export default TOTALS;