import { COMMON_CONSTANTS } from 'Constants/constants';

export function passwordValidation(control) {
  return (
    control.value.length <= COMMON_CONSTANTS.MAX_PASSWORD_LENGTH
    && control.value.length >= COMMON_CONSTANTS.MIN_PASSWORD_LENGTH
  );
}
