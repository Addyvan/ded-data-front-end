import gql from "graphql-tag";

const GET_PERIOD = gql`
  query GetPeriod($month: Int!, $year: Int) {
    periods(month: $month, year: $year) {
      id
      month
      year
      collab {
        totalNumAccounts
        numNewAccounts
        totalNumGroups
        numNewGroups
      }
    }
  }
`;

export default GET_PERIOD;