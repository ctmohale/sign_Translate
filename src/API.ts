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
  language?: ModelLanguageConnection | null,
  gesture?: ModelGestureConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLanguageConnection = {
  __typename: "ModelLanguageConnection",
  items:  Array<Language | null >,
  nextToken?: string | null,
};

export type Language = {
  __typename: "Language",
  id: string,
  Language_name: string,
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelGestureConnection = {
  __typename: "ModelGestureConnection",
  items:  Array<Gesture | null >,
  nextToken?: string | null,
};

export type Gesture = {
  __typename: "Gesture",
  id: string,
  sign_language: string,
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

export type CreateGestureInput = {
  id?: string | null,
  sign_language: string,
  user_id: string,
};

export type ModelGestureConditionInput = {
  sign_language?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelGestureConditionInput | null > | null,
  or?: Array< ModelGestureConditionInput | null > | null,
  not?: ModelGestureConditionInput | null,
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

export type UpdateGestureInput = {
  id: string,
  sign_language?: string | null,
  user_id?: string | null,
};

export type DeleteGestureInput = {
  id: string,
};

export type CreateLanguageInput = {
  id?: string | null,
  Language_name: string,
  user_id: string,
};

export type ModelLanguageConditionInput = {
  Language_name?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelLanguageConditionInput | null > | null,
  or?: Array< ModelLanguageConditionInput | null > | null,
  not?: ModelLanguageConditionInput | null,
};

export type UpdateLanguageInput = {
  id: string,
  Language_name?: string | null,
  user_id?: string | null,
};

export type DeleteLanguageInput = {
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

export type ModelGestureFilterInput = {
  id?: ModelIDInput | null,
  sign_language?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelGestureFilterInput | null > | null,
  or?: Array< ModelGestureFilterInput | null > | null,
  not?: ModelGestureFilterInput | null,
};

export type ModelLanguageFilterInput = {
  id?: ModelIDInput | null,
  Language_name?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelLanguageFilterInput | null > | null,
  or?: Array< ModelLanguageFilterInput | null > | null,
  not?: ModelLanguageFilterInput | null,
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

export type ModelSubscriptionGestureFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sign_language?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionGestureFilterInput | null > | null,
  or?: Array< ModelSubscriptionGestureFilterInput | null > | null,
};

export type ModelSubscriptionLanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Language_name?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
  or?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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

export type CreateGestureMutationVariables = {
  input: CreateGestureInput,
  condition?: ModelGestureConditionInput | null,
};

export type CreateGestureMutation = {
  createGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGestureMutationVariables = {
  input: UpdateGestureInput,
  condition?: ModelGestureConditionInput | null,
};

export type UpdateGestureMutation = {
  updateGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGestureMutationVariables = {
  input: DeleteGestureInput,
  condition?: ModelGestureConditionInput | null,
};

export type DeleteGestureMutation = {
  deleteGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLanguageMutationVariables = {
  input: CreateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type CreateLanguageMutation = {
  createLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLanguageMutationVariables = {
  input: UpdateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type UpdateLanguageMutation = {
  updateLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLanguageMutationVariables = {
  input: DeleteLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type DeleteLanguageMutation = {
  deleteLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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
      language?:  {
        __typename: "ModelLanguageConnection",
        nextToken?: string | null,
      } | null,
      gesture?:  {
        __typename: "ModelGestureConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGestureQueryVariables = {
  id: string,
};

export type GetGestureQuery = {
  getGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGesturesQueryVariables = {
  filter?: ModelGestureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGesturesQuery = {
  listGestures?:  {
    __typename: "ModelGestureConnection",
    items:  Array< {
      __typename: "Gesture",
      id: string,
      sign_language: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLanguageQueryVariables = {
  id: string,
};

export type GetLanguageQuery = {
  getLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLanguagesQueryVariables = {
  filter?: ModelLanguageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLanguagesQuery = {
  listLanguages?:  {
    __typename: "ModelLanguageConnection",
    items:  Array< {
      __typename: "Language",
      id: string,
      Language_name: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GesturesByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGestureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GesturesByUser_idQuery = {
  gesturesByUser_id?:  {
    __typename: "ModelGestureConnection",
    items:  Array< {
      __typename: "Gesture",
      id: string,
      sign_language: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LanguagesByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLanguageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LanguagesByUser_idQuery = {
  languagesByUser_id?:  {
    __typename: "ModelLanguageConnection",
    items:  Array< {
      __typename: "Language",
      id: string,
      Language_name: string,
      user_id: string,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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
    language?:  {
      __typename: "ModelLanguageConnection",
      items:  Array< {
        __typename: "Language",
        id: string,
        Language_name: string,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    gesture?:  {
      __typename: "ModelGestureConnection",
      items:  Array< {
        __typename: "Gesture",
        id: string,
        sign_language: string,
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

export type OnCreateGestureSubscriptionVariables = {
  filter?: ModelSubscriptionGestureFilterInput | null,
};

export type OnCreateGestureSubscription = {
  onCreateGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGestureSubscriptionVariables = {
  filter?: ModelSubscriptionGestureFilterInput | null,
};

export type OnUpdateGestureSubscription = {
  onUpdateGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGestureSubscriptionVariables = {
  filter?: ModelSubscriptionGestureFilterInput | null,
};

export type OnDeleteGestureSubscription = {
  onDeleteGesture?:  {
    __typename: "Gesture",
    id: string,
    sign_language: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnCreateLanguageSubscription = {
  onCreateLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnUpdateLanguageSubscription = {
  onUpdateLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnDeleteLanguageSubscription = {
  onDeleteLanguage?:  {
    __typename: "Language",
    id: string,
    Language_name: string,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
