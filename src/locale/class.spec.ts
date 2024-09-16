import { MeasurementSystem } from '../enum';
import { Locale } from './class';

describe('Locale', () => {
  describe('getLanguageCode', () => {
    it('should return default values', () => {
      expect(Locale.getLanguageCode('asdf')).toEqual(Locale.DefaultLanguage);
      expect(Locale.getLanguageCode('')).toEqual(Locale.DefaultLanguage);
      expect(Locale.getLanguageCode(null)).toEqual(Locale.DefaultLanguage);
      expect(Locale.getLanguageCode(undefined)).toEqual(Locale.DefaultLanguage);
    });

    it('should return the language code', () => {
      expect(Locale.getLanguageCode('en')).toEqual('en');
      expect(Locale.getLanguageCode('en_US')).toEqual('en');
      expect(Locale.getLanguageCode('en-CA')).toEqual('en');
      expect(Locale.getLanguageCode('fr')).toEqual('fr');
      expect(Locale.getLanguageCode('fr_FR')).toEqual('fr');
    });
  });

  describe('getRegionCode', () => {
    it('should return default values', () => {
      expect(Locale.getRegionCode('asdf')).toEqual(Locale.DefaultCountry);
      expect(Locale.getRegionCode('')).toEqual(Locale.DefaultCountry);
      expect(Locale.getRegionCode(null)).toEqual(Locale.DefaultCountry);
      expect(Locale.getRegionCode(undefined)).toEqual(Locale.DefaultCountry);
    });

    it('should return the language code', () => {
      expect(Locale.getRegionCode('en_US')).toEqual('US');
      expect(Locale.getRegionCode('en-CA')).toEqual('CA');
      expect(Locale.getRegionCode('fr_FR')).toEqual('FR');
    });
  });

  describe('getMeasurementSystem', () => {
    it('should return default values', () => {
      expect(Locale.getMeasurementSystem('CA')).toEqual(MeasurementSystem.SI);
      expect(Locale.getMeasurementSystem('GB')).toEqual(MeasurementSystem.GB);
      expect(Locale.getMeasurementSystem('US')).toEqual(MeasurementSystem.US);
    });
  });
});
