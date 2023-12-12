import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';
import { changedPaymentControl } from 'Components/annuity-calculator/_changed-payment-control';
import { CONSTANTS } from 'Constants/constants';

export function handleInputChange(event, controls) {
  let calcAnnuityPaymentsResult = {};
  calcAnnuityPaymentsResult = calcAnnuityPayments(
    controls.amountControl.value,
    controls.termControl.value,
  );

  switch (event.target.name) {
    case CONSTANTS.rangeControls.amountNameID:
      controls.paymentControl.value = calcAnnuityPayments(
        controls.amountControl.value,
        controls.termControl.value,
      ).payments[0].paymentAmount;
      controls.paymentControl.dispatchEvent(new Event('input'));
      break;
    case CONSTANTS.rangeControls.paymentNameID:
      changedPaymentControl(
        event.target.value,
        controls.amountControl,
        controls.termControl,
      );
      break;
    default:
      controls.paymentControl.value = calcAnnuityPayments(
        controls.amountControl.value,
        controls.termControl.value,
      ).payments[0].paymentAmount;
      controls.paymentControl.dispatchEvent(new Event('input'));
      break;
  }

  return calcAnnuityPaymentsResult;
}
