import { Alpha3Code } from '../type';

export function toAlpha3(alpha2: string): Alpha3Code {
  const code = toAlpha3(alpha2);
  if (!code) {
    throw new Error(`${alpha2} could not be converted to Alpha3 code`);
  } else {
    return code as Alpha3Code;
  }
}
