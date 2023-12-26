import { REGISTRATION_PAGE_CONSTANTS } from 'Constants/constants';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { phoneValidation } from 'Utils/validation/phone-validation';
import { resetError } from 'Utils/errors/reset-error';

export function registrationValidation(controls) {
  let isValid = true;
  controls.forEach((control) => {
    if (
      control.id
      === REGISTRATION_PAGE_CONSTANTS.registrationFormControls.userTypeControl
    ) {
      resetError(control);
      if (control.value === '') {
        isValid = false;
        showError(ERRORS.CE007(), control);
      }
    }

    if (
      control.id
      === REGISTRATION_PAGE_CONSTANTS.registrationFormControls.innControl
    ) {
      resetError(control);
      if (!(control.value.length === 10 || control.value.length === 12)) {
        isValid = false;
        showError(ERRORS.CE002(), control);
      }
    }

    if (
      control.id
      === REGISTRATION_PAGE_CONSTANTS.registrationFormControls.phoneControl
    ) {
      resetError(control);
      if (!phoneValidation(control)) {
        isValid = false;
        showError(ERRORS.CE001(), control);
      }
    }

    if (
      control.id
      === REGISTRATION_PAGE_CONSTANTS.registrationFormControls.passwordControl
    ) {
      resetError(control);
      if (!/^(?=.*[0-9])(?=.*[A-Z])\w{8,30}$/m.test(control.value)) {
        isValid = false;
        showError(ERRORS.CE005(), control);
      }
    }

    if (
      control.id
      === REGISTRATION_PAGE_CONSTANTS.registrationFormControls.repeatPasswordControl
    ) {
      resetError(control);
      if (
        document.getElementById(
          REGISTRATION_PAGE_CONSTANTS.registrationFormControls.passwordControl,
        ).value !== control.value
      ) {
        isValid = false;
        showError(ERRORS.CE006(), control);
      }
    }
  });
  return isValid;
}
