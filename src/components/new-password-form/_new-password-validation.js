import {
  COMMON_CONSTANTS,
  NEW_PASSWORD_PAGE_CONSTANTS,
} from 'Constants/constants';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { passwordValidation } from 'Utils/validation/password-validation';

export function newPasswordValidation(controls) {
  let isValid = true;
  controls.forEach((control) => {
    if (
      control.id
      === NEW_PASSWORD_PAGE_CONSTANTS.newPasswordFormControls
        .newPasswordConfirmationCodeControl
    ) {
      if (
        !(
          control.value.length
          && control.value.length <= COMMON_CONSTANTS.MAX_SMS_CODE_LENGTH
        )
      ) {
        isValid = false;
        if (!control.value.length) {
          showError(ERRORS.CE008(), control);
        } else {
          showError(ERRORS.CE002(), control);
        }
      }
    }

    if (
      control.id
      === NEW_PASSWORD_PAGE_CONSTANTS.newPasswordFormControls.newPasswordControl
    ) {
      if (!passwordValidation(control)) {
        isValid = false;
        showError(ERRORS.CE005(), control);
      }
    }

    if (
      control.id
      === NEW_PASSWORD_PAGE_CONSTANTS.newPasswordFormControls
        .newPasswordRepeatControl
    ) {
      if (
        control.value
        !== document.getElementById(
          NEW_PASSWORD_PAGE_CONSTANTS.newPasswordFormControls.newPasswordControl,
        ).value
      ) {
        isValid = false;
        showError(ERRORS.CE006(), control);
      }
    }
  });
  return isValid;
}
