import { preparePaymentControlValue } from 'Components/annuity-calculator/_prepare-payment-control-value';
import { handleInputChange } from 'Components/annuity-calculator/_handle-input-change';
import { CONSTANTS } from 'Constants/constants';

const controls = {
  amountControl: document.getElementById(CONSTANTS.rangeControls.amountNameID),
  paymentControl: document.getElementById(
    CONSTANTS.rangeControls.paymentNameID,
  ),
  termControl: document.getElementById(CONSTANTS.rangeControls.termNameID),
};

preparePaymentControlValue(
  controls.amountControl,
  controls.paymentControl,
  controls.termControl,
);

[controls.amountControl, controls.paymentControl, controls.termControl].forEach(
  (control) => {
    if (control) {
      control.addEventListener('input', (event) => {
        handleInputChange(event, controls);
      });
    }
  },
);
