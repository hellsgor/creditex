import { NEW_PASSWORD_PAGE_CONSTANTS } from 'Constants/constants';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { resetError } from 'Utils/errors/reset-error';
import { newPasswordValidation } from 'Components/new-password-form/_new-password-validation';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { newPasswordResponseHandler } from 'Components/new-password-form/_new-password-response-handler';
import 'UIKit/form-password/form-password';
import { getControls } from 'Utils/get-controls';

const newPasswordForm = document.getElementById(
  NEW_PASSWORD_PAGE_CONSTANTS.newPasswordForm,
);
const newPasswordFormControls = getControls(newPasswordForm);

newPasswordFormControls.forEach((control) => {
  control.addEventListener('input', (event) => {
    resetError(event.target);
    if (
      event.target.id
      === NEW_PASSWORD_PAGE_CONSTANTS.newPasswordFormControls
        .newPasswordConfirmationCodeControl
    ) {
      numbersOnly(event.target);
    }
  });
});

document
  .getElementById(NEW_PASSWORD_PAGE_CONSTANTS.newPasswordChangeButton)
  .addEventListener('click', (event) => {
    event.preventDefault();
    if (newPasswordValidation(newPasswordFormControls)) {
      handleFormSubmit(
        newPasswordForm,
        newPasswordForm.method,
        newPasswordForm.action,
        newPasswordResponseHandler,
        true,
      );
    }
  });
