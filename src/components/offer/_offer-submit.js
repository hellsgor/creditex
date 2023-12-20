import { phoneValidation } from 'Utils/validation/phoneValidation';
import { showError } from 'Utils/errors/show-error';
import { sendData } from 'Utils/handle-form-submit/_send-data';
import { serializeData } from 'Utils/handle-form-submit/_serialize-data';

export function offerSubmit(offerControl) {
  if (offerControl.value) {
    if (phoneValidation(offerControl)) {
      // TODO: актуализировать URL в sendData при передаче в back
      sendData(serializeData([offerControl]), './', false);
      window.location.href = `./registration.html?phoneNumber=${encodeURIComponent(
        offerControl.value.toString().replace(/[^\d]/g, ''),
      )}`;
    } else {
      showError('CE001', offerControl);
    }
  } else {
    window.location.href = './registration.html';
  }
}
