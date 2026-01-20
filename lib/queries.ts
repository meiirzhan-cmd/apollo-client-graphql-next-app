import { gql } from "@apollo/client";

// Получение всех стран
export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

// Получение стран с лимитом (для фильтрации на клиенте)
export const GET_COUNTRIES_BASIC = gql`
  query GetCountriesBasic {
    countries {
      code
      name
      emoji
    }
  }
`;

// Получение континентов со странами
export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`;

// Получение одной страны по коду
export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;
