import { addPhoneMask } from 'Utils/phone-mask/phone-mask';
import 'UIKit/form-range/form-range';

document.querySelectorAll('input[type="tel"]').forEach((telControl) => {
  addPhoneMask(telControl);
});
