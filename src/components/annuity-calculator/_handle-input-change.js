import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';
import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';

export function handleInputChange(target, controls) {
  let calcAnnuityPaymentsResult = {};
  calcAnnuityPaymentsResult = calcAnnuityPayments(
    controls.amountControl.value,
    controls.termControl.value,
  );

  if (
    target.name
    === REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeControls.AMOUNT_NAME_ID
  ) {
    controls.paymentControl.value = calcAnnuityPayments(
      controls.amountControl.value,
      controls.termControl.value,
    ).payments[0].paymentAmount;
    controls.paymentControl.dispatchEvent(new Event('input'));
  }

  if (
    target.name
    === REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeControls.TERM_NAME_ID
  ) {
    controls.paymentControl.value = calcAnnuityPayments(
      controls.amountControl.value,
      controls.termControl.value,
    ).payments[0].paymentAmount;
    controls.paymentControl.dispatchEvent(new Event('input'));
  }

  return calcAnnuityPaymentsResult;
}
