import { addPhoneMask } from 'Utils/phone-mask/phone-mask';
import { goToRegistrationPage } from 'Utils/go-to-registration-page';
import { resetError } from 'Utils/errors/reset-error';

const offerControl = document.getElementById('offer-phone');
const offerButton = document.getElementById('offer-button');

addPhoneMask();
offerButton.addEventListener('click', (event) => {
  event.preventDefault();
  goToRegistrationPage(offerControl);
});

offerControl.addEventListener('input', () => {
  resetError(offerControl);
});
