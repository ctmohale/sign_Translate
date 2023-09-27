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
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
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
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
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
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
      id
      data
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTranslationLanguageType = /* GraphQL */ `
  mutation CreateTranslationLanguageType(
    $input: CreateTranslationLanguageTypeInput!
    $condition: ModelTranslationLanguageTypeConditionInput
  ) {
    createTranslationLanguageType(input: $input, condition: $condition) {
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
export const updateTranslationLanguageType = /* GraphQL */ `
  mutation UpdateTranslationLanguageType(
    $input: UpdateTranslationLanguageTypeInput!
    $condition: ModelTranslationLanguageTypeConditionInput
  ) {
    updateTranslationLanguageType(input: $input, condition: $condition) {
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
export const deleteTranslationLanguageType = /* GraphQL */ `
  mutation DeleteTranslationLanguageType(
    $input: DeleteTranslationLanguageTypeInput!
    $condition: ModelTranslationLanguageTypeConditionInput
  ) {
    deleteTranslationLanguageType(input: $input, condition: $condition) {
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
export const createTranslationSetting = /* GraphQL */ `
  mutation CreateTranslationSetting(
    $input: CreateTranslationSettingInput!
    $condition: ModelTranslationSettingConditionInput
  ) {
    createTranslationSetting(input: $input, condition: $condition) {
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
export const updateTranslationSetting = /* GraphQL */ `
  mutation UpdateTranslationSetting(
    $input: UpdateTranslationSettingInput!
    $condition: ModelTranslationSettingConditionInput
  ) {
    updateTranslationSetting(input: $input, condition: $condition) {
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
export const deleteTranslationSetting = /* GraphQL */ `
  mutation DeleteTranslationSetting(
    $input: DeleteTranslationSettingInput!
    $condition: ModelTranslationSettingConditionInput
  ) {
    deleteTranslationSetting(input: $input, condition: $condition) {
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
