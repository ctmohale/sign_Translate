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
      translationsetting {
        items {
          id
          translationlanguage
          user_id
          translation_language_types_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      report {
        items {
          id
          data
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
        translationsetting {
          nextToken
          __typename
        }
        report {
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
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      name
      surname
      email
      password
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
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
export const getTranslationLanguageType = /* GraphQL */ `
  query GetTranslationLanguageType($id: ID!) {
    getTranslationLanguageType(id: $id) {
      id
      Language
      translationsetting {
        items {
          id
          translationlanguage
          user_id
          translation_language_types_id
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
export const listTranslationLanguageTypes = /* GraphQL */ `
  query ListTranslationLanguageTypes(
    $filter: ModelTranslationLanguageTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslationLanguageTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Language
        translationsetting {
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
export const getTranslationSetting = /* GraphQL */ `
  query GetTranslationSetting($id: ID!) {
    getTranslationSetting(id: $id) {
      id
      translationlanguage
      user_id
      translation_language_types_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTranslationSettings = /* GraphQL */ `
  query ListTranslationSettings(
    $filter: ModelTranslationSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslationSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        translationlanguage
        user_id
        translation_language_types_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reportsByUser_id = /* GraphQL */ `
  query ReportsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        data
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
export const translationSettingsByUser_id = /* GraphQL */ `
  query TranslationSettingsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTranslationSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    translationSettingsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        translationlanguage
        user_id
        translation_language_types_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const translationSettingsByTranslation_language_types_id = /* GraphQL */ `
  query TranslationSettingsByTranslation_language_types_id(
    $translation_language_types_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTranslationSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    translationSettingsByTranslation_language_types_id(
      translation_language_types_id: $translation_language_types_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        translationlanguage
        user_id
        translation_language_types_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
