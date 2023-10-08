/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGesture = /* GraphQL */ `
  mutation CreateGesture(
    $input: CreateGestureInput!
    $condition: ModelGestureConditionInput
  ) {
    createGesture(input: $input, condition: $condition) {
      id
      sign_language
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGesture = /* GraphQL */ `
  mutation UpdateGesture(
    $input: UpdateGestureInput!
    $condition: ModelGestureConditionInput
  ) {
    updateGesture(input: $input, condition: $condition) {
      id
      sign_language
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGesture = /* GraphQL */ `
  mutation DeleteGesture(
    $input: DeleteGestureInput!
    $condition: ModelGestureConditionInput
  ) {
    deleteGesture(input: $input, condition: $condition) {
      id
      sign_language
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
