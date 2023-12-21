import { preparePaymentControlValue } from 'Components/annuity-calculator/_prepare-payment-control-value';
import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';
import { renderGraph } from 'Components/annuity-calculator/_renderGraph';
import { getRange } from 'Components/annuity-calculator/_get-range';
import { convertControlValue } from 'Components/annuity-calculator/_convert-control-value';

const graphBlock = document.getElementById(
  REGULAR_ANNUITY_CALCULATOR_CONSTANTS.GRAPH_BLOCK_ID,
);
const controls = {
  amountControl: document.getElementById(
    REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeControls.AMOUNT_NAME_ID,
  ),
  paymentControl: document.getElementById(
    REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeControls.PAYMENT_NAME_ID,
  ),
  termControl: document.getElementById(
    REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeControls.TERM_NAME_ID,
  ),
};

const textControls = {
  amountTextControl: document.getElementById(
    REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeTextControls.AMOUNT_TEXT_NAME_ID,
  ),
  termTextControl: document.getElementById(
    REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeTextControls.TERM_TEXT_NAME_ID,
  ),
};

renderGraph(
  graphBlock,
  preparePaymentControlValue(
    controls.amountControl,
    controls.paymentControl,
    controls.termControl,
  ),
);

[textControls.amountTextControl, textControls.termTextControl].forEach(
  (control) => {
    if (control) {
      control.addEventListener('focus', (event) => {
        const { target } = event;
        const range = getRange(target, controls);

        target.value = range.value;
        controls.paymentControl.value = '';
      });
    }
  },
);

[textControls.amountTextControl, textControls.termTextControl].forEach(
  (control) => {
    if (control) {
      convertControlValue(control, controls);
    }
  },
);

[controls.amountControl, controls.termControl].forEach((control) => {
  if (control) {
    control.addEventListener('input', () => {
      renderGraph(
        graphBlock,
        preparePaymentControlValue(
          controls.amountControl,
          controls.paymentControl,
          controls.termControl,
        ),
      );
    });
  }
});
