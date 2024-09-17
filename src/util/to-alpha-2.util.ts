import { toAlpha2 as toAlpha2Package } from 'i18n-iso-countries';
import { Alpha2Code } from '../type';

export function toAlpha2(alpha3: string): Alpha2Code {
  const code = toAlpha2Package(alpha3);
  if (!code) {
    throw new Error(`${alpha3} could not be converted to Alpha2 code`);
  } else {
    return code as Alpha2Code;
  }
}
