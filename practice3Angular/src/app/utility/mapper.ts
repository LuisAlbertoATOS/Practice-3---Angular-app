import { __classPrivateFieldGet } from "tslib";
import { ICountry } from "../interfaces/country";
import { countryFromUrl } from "../interfaces/countryFromUrl.interface";

export class Mapper {
    public static mapCountryFromUrlToCountry(raw:countryFromUrl):ICountry {
        return {
            name: raw.name.official,
            capital: raw.capital,
            region: raw.region,
            language: raw.languages,
            population: raw.population,
            flag: raw.flag
        }
    }
}
