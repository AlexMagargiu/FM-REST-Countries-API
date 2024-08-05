/* INPUT TYPES */
export interface UserInput {
  country: string;
}

/* RESPONSE TYPES */
export interface CountryListResponseBasic {
  flags: {
    svg: string;
    png: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}

export interface CountryListResponseDetailed {
  flags: {
    svg: string;
    png: string;
  };
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  borders: string[];
}
