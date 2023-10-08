/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      surname
      email
      password
      address
      postal_code
      id_number
      cell_phone_no
      access_type
      language {
        items {
          id
          Language_name
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      gesture {
        items {
          id
          sign_language
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        email
        password
        address
        postal_code
        id_number
        cell_phone_no
        access_type
        language {
          nextToken
          __typename
        }
        gesture {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGesture = /* GraphQL */ `
  query GetGesture($id: ID!) {
    getGesture(id: $id) {
      id
      sign_language
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGestures = /* GraphQL */ `
  query ListGestures(
    $filter: ModelGestureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGestures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sign_language
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLanguage = /* GraphQL */ `
  query GetLanguage($id: ID!) {
    getLanguage(id: $id) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLanguages = /* GraphQL */ `
  query ListLanguages(
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Language_name
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const gesturesByUser_id = /* GraphQL */ `
  query GesturesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGestureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gesturesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sign_language
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const languagesByUser_id = /* GraphQL */ `
  query LanguagesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    languagesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Language_name
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
