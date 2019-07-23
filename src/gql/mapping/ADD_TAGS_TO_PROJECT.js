import gql from "graphql-tag";

const ADD_TAGS_TO_PROJECT = gql`
  mutation TagProject($projectId: ID!, $tagId: ID!) {
    tagProject(projectId: $projectId, tagId: $tagId) {
      id
    }
  }
`;

export default ADD_TAGS_TO_PROJECT;