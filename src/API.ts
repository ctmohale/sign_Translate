/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  surname: string,
  email: string,
  password: string,
  address: string,
  postal_code: string,
  id_number: string,
  cell_phone_no: string,
  access_type: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  id_number?: ModelStringInput | null,
  cell_phone_no?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  surname: string,
  email: string,
  password: string,
  address: string,
  postal_code: string,
  id_number: string,
  cell_phone_no: string,
  access_type: string,
  translationsetting?: ModelTranslationSettingConnection | null,
  report?: ModelReportConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTranslationSettingConnection = {
  __typename: "ModelTranslationSettingConnection",
  items:  Array<TranslationSetting | null >,
  nextToken?: string | null,
};

export type TranslationSetting = {
  __typename: "TranslationSetting",
  id: string,
  translationlanguage?: string | null,
  user_id: string,
  translation_language_types_id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type Report = {
  __typename: "Report",
  id: string,
  data: string,
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  surname?: string | null,
  email?: string | null,
  password?: string | null,
  address?: string | null,
  postal_code?: string | null,
  id_number?: string | null,
  cell_phone_no?: string | null,
  access_type?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAdminInput = {
  id?: string | null,
  name: string,
  surname: string,
  email: string,
  password: string,
};

export type ModelAdminConditionInput = {
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelAdminConditionInput | null > | null,
  or?: Array< ModelAdminConditionInput | null > | null,
  not?: ModelAdminConditionInput | null,
};

export type Admin = {
  __typename: "Admin",
  id: string,
  name: string,
  surname: string,
  email: string,
  password: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdminInput = {
  id: string,
  name?: string | null,
  surname?: string | null,
  email?: string | null,
  password?: string | null,
};

export type DeleteAdminInput = {
  id: string,
};

export type CreateReportInput = {
  id?: string | null,
  data: string,
  user_id: string,
};

export type ModelReportConditionInput = {
  data?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateReportInput = {
  id: string,
  data?: string | null,
  user_id?: string | null,
};

export type DeleteReportInput = {
  id: string,
};

export type CreateTranslationLanguageTypeInput = {
  id?: string | null,
  Language: string,
};

export type ModelTranslationLanguageTypeConditionInput = {
  Language?: ModelStringInput | null,
  and?: Array< ModelTranslationLanguageTypeConditionInput | null > | null,
  or?: Array< ModelTranslationLanguageTypeConditionInput | null > | null,
  not?: ModelTranslationLanguageTypeConditionInput | null,
};

export type TranslationLanguageType = {
  __typename: "TranslationLanguageType",
  id: string,
  Language: string,
  translationsetting?: ModelTranslationSettingConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTranslationLanguageTypeInput = {
  id: string,
  Language?: string | null,
};

export type DeleteTranslationLanguageTypeInput = {
  id: string,
};

export type CreateTranslationSettingInput = {
  id?: string | null,
  translationlanguage?: string | null,
  user_id: string,
  translation_language_types_id: string,
};

export type ModelTranslationSettingConditionInput = {
  translationlanguage?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  translation_language_types_id?: ModelIDInput | null,
  and?: Array< ModelTranslationSettingConditionInput | null > | null,
  or?: Array< ModelTranslationSettingConditionInput | null > | null,
  not?: ModelTranslationSettingConditionInput | null,
};

export type UpdateTranslationSettingInput = {
  id: string,
  translationlanguage?: string | null,
  user_id?: string | null,
  translation_language_types_id?: string | null,
};

export type DeleteTranslationSettingInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  id_number?: ModelStringInput | null,
  cell_phone_no?: ModelStringInput | null,
  access_type?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAdminFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelAdminFilterInput | null > | null,
  or?: Array< ModelAdminFilterInput | null > | null,
  not?: ModelAdminFilterInput | null,
};

export type ModelAdminConnection = {
  __typename: "ModelAdminConnection",
  items:  Array<Admin | null >,
  nextToken?: string | null,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  data?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type ModelTranslationLanguageTypeFilterInput = {
  id?: ModelIDInput | null,
  Language?: ModelStringInput | null,
  and?: Array< ModelTranslationLanguageTypeFilterInput | null > | null,
  or?: Array< ModelTranslationLanguageTypeFilterInput | null > | null,
  not?: ModelTranslationLanguageTypeFilterInput | null,
};

export type ModelTranslationLanguageTypeConnection = {
  __typename: "ModelTranslationLanguageTypeConnection",
  items:  Array<TranslationLanguageType | null >,
  nextToken?: string | null,
};

export type ModelTranslationSettingFilterInput = {
  id?: ModelIDInput | null,
  translationlanguage?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  translation_language_types_id?: ModelIDInput | null,
  and?: Array< ModelTranslationSettingFilterInput | null > | null,
  or?: Array< ModelTranslationSettingFilterInput | null > | null,
  not?: ModelTranslationSettingFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  id_number?: ModelSubscriptionStringInput | null,
  cell_phone_no?: ModelSubscriptionStringInput | null,
  access_type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAdminFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminFilterInput | null > | null,
};

export type ModelSubscriptionReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  data?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
};

export type ModelSubscriptionTranslationLanguageTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Language?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTranslationLanguageTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionTranslationLanguageTypeFilterInput | null > | null,
};

export type ModelSubscriptionTranslationSettingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  translationlanguage?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  translation_language_types_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTranslationSettingFilterInput | null > | null,
  or?: Array< ModelSubscriptionTranslationSettingFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminMutationVariables = {
  input: CreateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type CreateAdminMutation = {
  createAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminMutationVariables = {
  input: UpdateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type UpdateAdminMutation = {
  updateAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminMutationVariables = {
  input: DeleteAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type DeleteAdminMutation = {
  deleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTranslationLanguageTypeMutationVariables = {
  input: CreateTranslationLanguageTypeInput,
  condition?: ModelTranslationLanguageTypeConditionInput | null,
};

export type CreateTranslationLanguageTypeMutation = {
  createTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTranslationLanguageTypeMutationVariables = {
  input: UpdateTranslationLanguageTypeInput,
  condition?: ModelTranslationLanguageTypeConditionInput | null,
};

export type UpdateTranslationLanguageTypeMutation = {
  updateTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTranslationLanguageTypeMutationVariables = {
  input: DeleteTranslationLanguageTypeInput,
  condition?: ModelTranslationLanguageTypeConditionInput | null,
};

export type DeleteTranslationLanguageTypeMutation = {
  deleteTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTranslationSettingMutationVariables = {
  input: CreateTranslationSettingInput,
  condition?: ModelTranslationSettingConditionInput | null,
};

export type CreateTranslationSettingMutation = {
  createTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTranslationSettingMutationVariables = {
  input: UpdateTranslationSettingInput,
  condition?: ModelTranslationSettingConditionInput | null,
};

export type UpdateTranslationSettingMutation = {
  updateTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTranslationSettingMutationVariables = {
  input: DeleteTranslationSettingInput,
  condition?: ModelTranslationSettingConditionInput | null,
};

export type DeleteTranslationSettingMutation = {
  deleteTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      surname: string,
      email: string,
      password: string,
      address: string,
      postal_code: string,
      id_number: string,
      cell_phone_no: string,
      access_type: string,
      translationsetting?:  {
        __typename: "ModelTranslationSettingConnection",
        nextToken?: string | null,
      } | null,
      report?:  {
        __typename: "ModelReportConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminQueryVariables = {
  id: string,
};

export type GetAdminQuery = {
  getAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdminsQueryVariables = {
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminsQuery = {
  listAdmins?:  {
    __typename: "ModelAdminConnection",
    items:  Array< {
      __typename: "Admin",
      id: string,
      name: string,
      surname: string,
      email: string,
      password: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      data: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTranslationLanguageTypeQueryVariables = {
  id: string,
};

export type GetTranslationLanguageTypeQuery = {
  getTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTranslationLanguageTypesQueryVariables = {
  filter?: ModelTranslationLanguageTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTranslationLanguageTypesQuery = {
  listTranslationLanguageTypes?:  {
    __typename: "ModelTranslationLanguageTypeConnection",
    items:  Array< {
      __typename: "TranslationLanguageType",
      id: string,
      Language: string,
      translationsetting?:  {
        __typename: "ModelTranslationSettingConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTranslationSettingQueryVariables = {
  id: string,
};

export type GetTranslationSettingQuery = {
  getTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTranslationSettingsQueryVariables = {
  filter?: ModelTranslationSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTranslationSettingsQuery = {
  listTranslationSettings?:  {
    __typename: "ModelTranslationSettingConnection",
    items:  Array< {
      __typename: "TranslationSetting",
      id: string,
      translationlanguage?: string | null,
      user_id: string,
      translation_language_types_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReportsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReportsByUser_idQuery = {
  reportsByUser_id?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      data: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TranslationSettingsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTranslationSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TranslationSettingsByUser_idQuery = {
  translationSettingsByUser_id?:  {
    __typename: "ModelTranslationSettingConnection",
    items:  Array< {
      __typename: "TranslationSetting",
      id: string,
      translationlanguage?: string | null,
      user_id: string,
      translation_language_types_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TranslationSettingsByTranslation_language_types_idQueryVariables = {
  translation_language_types_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTranslationSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TranslationSettingsByTranslation_language_types_idQuery = {
  translationSettingsByTranslation_language_types_id?:  {
    __typename: "ModelTranslationSettingConnection",
    items:  Array< {
      __typename: "TranslationSetting",
      id: string,
      translationlanguage?: string | null,
      user_id: string,
      translation_language_types_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    postal_code: string,
    id_number: string,
    cell_phone_no: string,
    access_type: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    report?:  {
      __typename: "ModelReportConnection",
      items:  Array< {
        __typename: "Report",
        id: string,
        data: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnCreateAdminSubscription = {
  onCreateAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnUpdateAdminSubscription = {
  onUpdateAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminSubscriptionVariables = {
  filter?: ModelSubscriptionAdminFilterInput | null,
};

export type OnDeleteAdminSubscription = {
  onDeleteAdmin?:  {
    __typename: "Admin",
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    id: string,
    data: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTranslationLanguageTypeSubscriptionVariables = {
  filter?: ModelSubscriptionTranslationLanguageTypeFilterInput | null,
};

export type OnCreateTranslationLanguageTypeSubscription = {
  onCreateTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTranslationLanguageTypeSubscriptionVariables = {
  filter?: ModelSubscriptionTranslationLanguageTypeFilterInput | null,
};

export type OnUpdateTranslationLanguageTypeSubscription = {
  onUpdateTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTranslationLanguageTypeSubscriptionVariables = {
  filter?: ModelSubscriptionTranslationLanguageTypeFilterInput | null,
};

export type OnDeleteTranslationLanguageTypeSubscription = {
  onDeleteTranslationLanguageType?:  {
    __typename: "TranslationLanguageType",
    id: string,
    Language: string,
    translationsetting?:  {
      __typename: "ModelTranslationSettingConnection",
      items:  Array< {
        __typename: "TranslationSetting",
        id: string,
        translationlanguage?: string | null,
        user_id: string,
        translation_language_types_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTranslationSettingSubscriptionVariables = {
  filter?: ModelSubscriptionTranslationSettingFilterInput | null,
};

export type OnCreateTranslationSettingSubscription = {
  onCreateTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTranslationSettingSubscriptionVariables = {
  filter?: ModelSubscriptionTranslationSettingFilterInput | null,
};

export type OnUpdateTranslationSettingSubscription = {
  onUpdateTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTranslationSettingSubscriptionVariables = {
  filter?: ModelSubscriptionTranslationSettingFilterInput | null,
};

export type OnDeleteTranslationSettingSubscription = {
  onDeleteTranslationSetting?:  {
    __typename: "TranslationSetting",
    id: string,
    translationlanguage?: string | null,
    user_id: string,
    translation_language_types_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
