import { NEW_PASSWORD_PAGE_CONSTANTS } from 'Constants/constants';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { resetError } from 'Utils/errors/reset-error';
import { newPasswordValidation } from 'Components/new-password-form/_new-password-validation';

const controls = Object.values(
  NEW_PASSWORD_PAGE_CONSTANTS.newPasswordFormControls,
).map((controlID) => {
  const control = document.getElementById(controlID);
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
  return control;
});

document
  .getElementById(NEW_PASSWORD_PAGE_CONSTANTS.newPasswordChangeButton)
  .addEventListener('click', () => {
    if (newPasswordValidation(controls)) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  });
