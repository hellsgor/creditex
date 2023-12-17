import { preparePaymentControlValue } from 'Components/annuity-calculator/_prepare-payment-control-value';
import { CONSTANTS } from 'Constants/constants';
import { renderGraph } from 'Components/annuity-calculator/_renderGraph';
import { handleInputChange } from 'Components/annuity-calculator/_handle-input-change';

const graphBlock = document.getElementById(CONSTANTS.GRAPH_BLOCK_ID);
const controls = {
  amountControl: document.getElementById(
    CONSTANTS.rangeControls.AMOUNT_NAME_ID,
  ),
  paymentControl: document.getElementById(
    CONSTANTS.rangeControls.PAYMENT_NAME_ID,
  ),
  termControl: document.getElementById(CONSTANTS.rangeControls.TERM_NAME_ID),
};

renderGraph(
  graphBlock,
  preparePaymentControlValue(
    controls.amountControl,
    controls.paymentControl,
    controls.termControl,
  ),
);

[controls.amountControl, controls.paymentControl, controls.termControl].forEach(
  (control) => {
    if (control) {
      control.addEventListener('input', (event) => {
        renderGraph(graphBlock, handleInputChange(event.target, controls));
      });
    }
  },
);