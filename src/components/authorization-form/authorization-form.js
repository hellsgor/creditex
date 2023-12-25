import 'UIKit/form-password/form-password';
import 'Utils/masks/phone-mask';
import { AUTHORIZATION_PAGE_CONSTANTS } from 'Constants/constants';
import { phoneValidation } from 'Utils/validation/phone-validation';
import { passwordValidation } from 'Utils/validation/password-validation';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { authorizationResponseHandler } from 'Components/authorization-form/_authorizationResponseHandler';

const phoneControl = document.getElementById(
  AUTHORIZATION_PAGE_CONSTANTS.phoneControl,
);
const passwordControl = document.getElementById(
  AUTHORIZATION_PAGE_CONSTANTS.passwordControl,
);

const rememberUserCheckbox = document.getElementById(
  AUTHORIZATION_PAGE_CONSTANTS.rememberUserCheckbox,
);
const authFormControlsArray = [
  phoneControl,
  passwordControl,
  rememberUserCheckbox,
];

[phoneControl, passwordControl].forEach((control) => {
  control.addEventListener('input', () => {
    resetError(control);
  });
});

document
  .getElementById(AUTHORIZATION_PAGE_CONSTANTS.comeInButton)
  .addEventListener('click', (event) => {
    event.preventDefault();

    [phoneControl, passwordControl].forEach((control) => {
      resetError(control);
    });

    if (!phoneValidation(phoneControl)) {
      showError(ERRORS.CE001(), phoneControl);
    }
    if (!passwordValidation(passwordControl)) {
      showError(ERRORS.CE002(), passwordControl);
    }

    if (phoneValidation(phoneControl) && passwordValidation(passwordControl)) {
      handleFormSubmit(
        authFormControlsArray,
        // TODO: актуализировать URL при передаче в back
        './moc/authorization-response-success.json',
        authorizationResponseHandler,
        true,
        passwordControl,
      );
    }
  });
