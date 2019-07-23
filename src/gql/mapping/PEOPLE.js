import gql from "graphql-tag";

const PEOPLE = gql`
  query PeopleForSearch {
    people {
      id
      name
    }
  }
`;

export default PEOPLE;