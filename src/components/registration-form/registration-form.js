import { REGISTRATION_PAGE_CONSTANTS } from 'Constants/constants';

import 'UIKit/form-password/form-password';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { addPhoneMask } from 'Utils/masks/phone-mask';
import { registrationValidation } from 'Components/registration-form/_registration-validation';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { registrationResponseHandler } from 'Components/registration-form/_registration-response-handler';
import { getFormControls } from 'Utils/get-form-controls';

const registrationControls = getFormControls(
  document.getElementById(REGISTRATION_PAGE_CONSTANTS.registrationForm),
);
const phoneControl = document.getElementById(
  REGISTRATION_PAGE_CONSTANTS.registrationFormControls.phoneControl,
);

addPhoneMask();
phoneControl.value = new URLSearchParams(window.location.search).get(
  'phoneNumber',
);
phoneControl.dispatchEvent(new Event('input'));

registrationControls.forEach((control) => {
  if (
    control.id
    !== REGISTRATION_PAGE_CONSTANTS.registrationFormControls.rememberUserCheckbox
  ) {
    control.addEventListener('input', (event) => {
      if (
        control.id
        === REGISTRATION_PAGE_CONSTANTS.registrationFormControls.innControl
      ) {
        numbersOnly(event.target);
      }
      resetError(control);
    });
  }
});

document
  .getElementById(REGISTRATION_PAGE_CONSTANTS.comeInButton)
  .addEventListener('click', () => {
    if (registrationValidation(registrationControls)) {
      handleFormSubmit(
        registrationControls,
        'POST',
        './auth/?register=yes',
        registrationResponseHandler,
        true,
      );
    }
  });
