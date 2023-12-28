import { NEW_PASSWORD_PAGE_CONSTANTS } from 'Constants/constants';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { resetError } from 'Utils/errors/reset-error';
import { newPasswordValidation } from 'Components/new-password-form/_new-password-validation';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { newPasswordResponseHandler } from 'Components/new-password-form/_new-password-response-handler';
import 'UIKit/form-password/form-password';

const controls = [];

const newPasswordForm = document.getElementById(
  NEW_PASSWORD_PAGE_CONSTANTS.newPasswordForm,
);

newPasswordForm.querySelectorAll('input').forEach((control) => {
  controls.push(control);
});
newPasswordForm.querySelectorAll('select').forEach((control) => {
  controls.push(control);
});

controls.forEach((control) => {
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
  .addEventListener('click', () => {
    if (newPasswordValidation(controls)) {
      handleFormSubmit(
        controls,
        // TODO: актуализировать url при передаче в back
        // 'GET',
        // './moc/new-password-response-error.json',

        'POST',
        'http://localhost:4000/endpoint',

        newPasswordResponseHandler,
        true,
      );
    }
  });
