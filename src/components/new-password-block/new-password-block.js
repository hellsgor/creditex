import 'UIKit/form-password/form-password';
import { COMMON_CONSTANTS, NEW_PASSWORD_PAGE } from 'Constants/constants';
import { getControls } from 'Utils/get-controls';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { newPasswordResponseHandler } from 'Components/new-password-block/_new-password-response-handler';

const newPasswordForm = document.getElementById(NEW_PASSWORD_PAGE.form);
const controls = getControls(newPasswordForm);

document
  .getElementById(NEW_PASSWORD_PAGE.buttons.submit)
  .addEventListener('click', (event) => {
    event.preventDefault();

    let isValid = true;
    controls.forEach((control) => {
      resetError(control);
      if (control.id === NEW_PASSWORD_PAGE.controls.password) {
        if (
          control.value.trim().length < COMMON_CONSTANTS.MIN_PASSWORD_LENGTH
        ) {
          isValid = false;
          showError(ERRORS.CE005(), control);
        }
      }

      if (control.id === NEW_PASSWORD_PAGE.controls.repeat) {
        if (!control.value.trim().length) {
          isValid = false;
          showError(ERRORS.CE013(), control);
        }
        if (
          control.value
            !== document
              .getElementById(NEW_PASSWORD_PAGE.controls.password)
              .value.trim()
          && document
            .getElementById(NEW_PASSWORD_PAGE.controls.password)
            .value.trim().length
        ) {
          isValid = false;
          showError(ERRORS.CE006(), control);
        }
      }
    });

    if (isValid) {
      handleFormSubmit(
        newPasswordForm,
        newPasswordForm.method,
        newPasswordForm.action,
        newPasswordResponseHandler,
        true,
        null,
      );
    }
  });
