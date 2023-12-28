import { CONFIRMATION_PAGE_CONSTANTS } from 'Constants/constants';
import { numbersOnly } from 'Utils/masks/numbers-only-mask';
import { resetError } from 'Utils/errors/reset-error';
import { handleFormSubmit } from 'Utils/handle-form-submit/handle-form-submit';
import { confirmationResponseHandler } from 'Components/confirmation-form/_confirmation-response-handler';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';

const codeControl = document.getElementById(
  CONFIRMATION_PAGE_CONSTANTS.confirmationFormControls.confirmationCodeControl,
);
const signedData = document.getElementById(
  CONFIRMATION_PAGE_CONSTANTS.confirmationFormControls.confirmationSignedData,
);
codeControl.addEventListener('input', () => {
  resetError(codeControl);
  numbersOnly(codeControl);
});

document
  .getElementById(CONFIRMATION_PAGE_CONSTANTS.confirmationForwardButton)
  .addEventListener('click', () => {
    if (codeControl.value.length && codeControl.value.length <= 8) {
      handleFormSubmit(
        [codeControl],
        // TODO: изменить url при передаче в back
        [codeControl, signedData],
        // './moc/confirmation-response-error.json',
        './moc/confirmation-response-success.json',
        confirmationResponseHandler,
        true,
      );
    } else if (!codeControl.value.length) {
      showError(ERRORS.CE008(), codeControl);
    } else {
      showError(ERRORS.CE002(), codeControl);
    }
  });
