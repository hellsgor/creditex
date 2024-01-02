import { NEW_APPLICATION_PAGE } from 'Constants/constants';
import { getControls } from 'Utils/get-controls';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { addPhoneMask } from 'Utils/masks/phone-mask';
import { resetError } from 'Utils/errors/reset-error';
import { step1Validation } from './_step-1-validation';

const form = document.getElementById(NEW_APPLICATION_PAGE.formId);

const controls = getControls(form);

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

document
  .getElementById(NEW_APPLICATION_PAGE.buttons.goToStep2)
  .addEventListener('click', () => {
    const isStep1Valid = step1Validation(
      getControls(document.getElementById(NEW_APPLICATION_PAGE.sections.step1)),
    );
    console.log(isStep1Valid);
  });
