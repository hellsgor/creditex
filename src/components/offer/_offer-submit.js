import { phoneValidation } from 'Utils/validation/phoneValidation';

export function offerSubmit(offerControl) {
  if (offerControl.value) {
    const isValid = phoneValidation(offerControl);
  } else {
    window.location.href = './registration.html';
  }
}
