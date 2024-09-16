import { MeasurementSystem } from '../enum';
import { Alpha2Code, LanguageCode, LocaleString } from '../type';
import { isAlpha2Code, isLanguageCode } from '../util';

export class Locale {
  public static DefaultLanguage: LanguageCode = 'en';
  public static DefaultCountry: Alpha2Code = 'CA';

  readonly language: LanguageCode;
  readonly region: Alpha2Code;
  readonly units: MeasurementSystem;

  constructor(locale: LocaleString) {
    const region = Locale.getRegionCode(locale);
    this.language = Locale.getLanguageCode(locale);
    this.region = region;
    this.units = Locale.getMeasurementSystem(region);
  }

  static getLanguageCode(locale: LocaleString): LanguageCode {
    if (locale !== null && locale !== undefined && locale.length >= 2) {
      const language = locale.substring(0, 2).toLowerCase();
      if (isLanguageCode(language)) {
        return language;
      } else {
        return Locale.DefaultLanguage;
      }
    } else {
      return Locale.DefaultLanguage;
    }
  }

  static getRegionCode(locale: LocaleString): Alpha2Code {
    if (locale !== null && locale !== undefined && locale.length >= 2) {
      const country = locale
        .substring(locale.length - 2, locale.length)
        .toUpperCase();
      if (isAlpha2Code(country)) {
        return country;
      } else {
        return Locale.DefaultCountry;
      }
    } else {
      return Locale.DefaultCountry;
    }
  }

  static getMeasurementSystem(region: Alpha2Code): MeasurementSystem {
    switch (region) {
      case 'US':
        return MeasurementSystem.US;
      case 'GB':
        return MeasurementSystem.GB;
      default:
        return MeasurementSystem.SI;
    }
  }

  toString(): string {
    return `${this.language.toLowerCase()}-${this.region.toUpperCase()}`;
  }
}
