import { isString } from 'class-validator';
import { isValid } from 'i18n-iso-countries';
import { Alpha2Code } from '../type';

export function isAlpha2Code(value: unknown): value is Alpha2Code {
  return isString(value) && value.length == 2 && isValid(value);
}
