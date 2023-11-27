import { addPhoneMask } from 'Utils/phone-mask/phone-mask';

document.querySelectorAll('input[type="tel"]').forEach((telControl) => {
  addPhoneMask(telControl);
});
