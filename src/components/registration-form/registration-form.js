import { REGISTRATION_PAGE_CONSTANTS } from 'Constants/constants';

import 'UIKit/form-password/form-password';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { addPhoneMask } from 'Utils/masks/phone-mask';

const registrationControls = Object.values(
  REGISTRATION_PAGE_CONSTANTS.registrationFormControls,
).map((id) => document.getElementById(id));

addPhoneMask();

document
  .getElementById(
    REGISTRATION_PAGE_CONSTANTS.registrationFormControls.innControl,
  )
  .addEventListener('input', (event) => {
    numbersOnly(event.target);
  });
