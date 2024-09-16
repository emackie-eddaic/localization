import { isString } from 'class-validator';
import { LanguageCode } from '../type';

export function isLanguageCode(value: unknown): value is LanguageCode {
  return (
    isString(value) && value.length == 2 && (value === 'en' || value === 'fr')
  );
}
