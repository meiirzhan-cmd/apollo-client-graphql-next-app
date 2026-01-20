export interface Country {
  code: string;
  name: string;
  emoji: string;
  capital: string;
  currency: string;
  languages: {
    name: string;
  }[];
  continent: {
    name: string;
  };
}

export interface CountriesData {
  countries: Country[];
}

export interface Continent {
  code: string;
  name: string;
  countries: {
    code: string;
    name: string;
    emoji: string;
  }[];
}

export interface ContinentsData {
  continents: Continent[];
}
