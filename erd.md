```plantuml
@startuml
!define Table class

class User {
  +id: ID!
  +name: String!
  +surname: String!
  +email: String!
  +password: String!
  +address: String!
  +postal_code: String!
  +id_number: String!
  +cell_phone_no: String!
  +access_type: String!
}

class Admin {
  +id: ID!
  +name: String!
  +surname: String!
  +email: String!
  +password: String!
}

class Report {
  +id: ID!
  +data: String!
  +user_id: ID!
}

class TranslationLanguageType {
  +id: ID!
  +Language: String!
}

class TranslationSetting {
  +id: ID!
  +translationlanguage: String
  +user_id: ID!
  +translation_language_types_id: ID!
}

class AMPLIFY {
  +globalAuthRule: AuthRule = { allow: public }
}

User --|{ Report : user_id
User --|{ TranslationSetting : user_id
TranslationLanguageType --|{ TranslationSetting : translation_language_types_id

@enduml
