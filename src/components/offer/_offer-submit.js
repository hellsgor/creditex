import { phoneValidation } from 'Utils/validation/phoneValidation';
import { showError } from 'Utils/errors/show-error';

export function offerSubmit(offerControl) {
  if (offerControl.value) {
    if (phoneValidation(offerControl)) {
      console.log('ok');
    } else {
      showError('CE001', offerControl);
    }
  } else {
    window.location.href = './registration.html';
  }
}
