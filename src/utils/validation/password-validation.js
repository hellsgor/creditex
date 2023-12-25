import { COMMON_CONSTANTS } from 'Constants/constants';

export function passwordValidation(control) {
  return control.valueOf.length <= COMMON_CONSTANTS.MAX_PASSWORD_LENGTH;
}
