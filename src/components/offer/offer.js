import { addPhoneMask } from 'Utils/phone-mask/phone-mask';
import { offerSubmit } from 'Components/offer/_offer-submit';
import { resetError } from 'Utils/errors/reset-error';

const offerControl = document.getElementById('offer-phone');
const offerButton = document.getElementById('offer-button');

addPhoneMask();
offerButton.addEventListener('click', (event) => {
  event.preventDefault();
  offerSubmit(offerControl);
});

offerControl.addEventListener('input', () => {
  resetError(offerControl);
});
