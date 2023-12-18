import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';
import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';

export function preparePaymentControlValue(
  amountControl,
  paymentControl,
  termControl,
) {
  const calcAnnuityPaymentsResult = calcAnnuityPayments(
    amountControl.value,
    termControl.value,
    REGULAR_ANNUITY_CALCULATOR_CONSTANTS.ANNUAL_INTEREST_RATE,
  );

  paymentControl.value = Number(
    calcAnnuityPaymentsResult.payments[0].paymentAmount,
  );
  paymentControl.dispatchEvent(new Event('change'));

  return calcAnnuityPaymentsResult;
}
