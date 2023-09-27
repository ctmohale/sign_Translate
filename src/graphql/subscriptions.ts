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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTranslationLanguageType = /* GraphQL */ `
  subscription OnCreateTranslationLanguageType(
    $filter: ModelSubscriptionTranslationLanguageTypeFilterInput
  ) {
    onCreateTranslationLanguageType(filter: $filter) {
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
export const onUpdateTranslationLanguageType = /* GraphQL */ `
  subscription OnUpdateTranslationLanguageType(
    $filter: ModelSubscriptionTranslationLanguageTypeFilterInput
  ) {
    onUpdateTranslationLanguageType(filter: $filter) {
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
export const onDeleteTranslationLanguageType = /* GraphQL */ `
  subscription OnDeleteTranslationLanguageType(
    $filter: ModelSubscriptionTranslationLanguageTypeFilterInput
  ) {
    onDeleteTranslationLanguageType(filter: $filter) {
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
export const onCreateTranslationSetting = /* GraphQL */ `
  subscription OnCreateTranslationSetting(
    $filter: ModelSubscriptionTranslationSettingFilterInput
  ) {
    onCreateTranslationSetting(filter: $filter) {
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
export const onUpdateTranslationSetting = /* GraphQL */ `
  subscription OnUpdateTranslationSetting(
    $filter: ModelSubscriptionTranslationSettingFilterInput
  ) {
    onUpdateTranslationSetting(filter: $filter) {
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
export const onDeleteTranslationSetting = /* GraphQL */ `
  subscription OnDeleteTranslationSetting(
    $filter: ModelSubscriptionTranslationSettingFilterInput
  ) {
    onDeleteTranslationSetting(filter: $filter) {
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
