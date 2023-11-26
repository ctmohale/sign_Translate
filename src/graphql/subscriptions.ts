/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
          camera
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
          camera
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
          camera
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
export const onCreateGesture = /* GraphQL */ `
  subscription OnCreateGesture($filter: ModelSubscriptionGestureFilterInput) {
    onCreateGesture(filter: $filter) {
      id
      sign_language
      user_id
      camera
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGesture = /* GraphQL */ `
  subscription OnUpdateGesture($filter: ModelSubscriptionGestureFilterInput) {
    onUpdateGesture(filter: $filter) {
      id
      sign_language
      user_id
      camera
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGesture = /* GraphQL */ `
  subscription OnDeleteGesture($filter: ModelSubscriptionGestureFilterInput) {
    onDeleteGesture(filter: $filter) {
      id
      sign_language
      user_id
      camera
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLanguage = /* GraphQL */ `
  subscription OnCreateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onCreateLanguage(filter: $filter) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLanguage = /* GraphQL */ `
  subscription OnUpdateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onUpdateLanguage(filter: $filter) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLanguage = /* GraphQL */ `
  subscription OnDeleteLanguage($filter: ModelSubscriptionLanguageFilterInput) {
    onDeleteLanguage(filter: $filter) {
      id
      Language_name
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
