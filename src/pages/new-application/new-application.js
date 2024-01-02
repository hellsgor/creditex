import { NEW_APPLICATION_PAGE } from 'Constants/constants';
import { getFormControls } from 'Utils/get-form-controls';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { addPhoneMask } from 'Utils/masks/phone-mask';
import { resetError } from 'Utils/errors/reset-error';

const form = document.getElementById(NEW_APPLICATION_PAGE.formId);

const controls = getFormControls(form);

controls.forEach((control) => {
  control.addEventListener('input', () => {
    resetError(control);
  });

  if (control.id === NEW_APPLICATION_PAGE.controlsIds.inn) {
    control.addEventListener('input', () => {
      numbersOnly(control);
    });
  }

  if (control.id === NEW_APPLICATION_PAGE.controlsIds.phoneNumber) {
    addPhoneMask([control]);
  }
});
