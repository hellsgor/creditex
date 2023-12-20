import { ERRORS } from 'Constants/errors';

export function getErrorText(code) {
  return ERRORS[code];
}
