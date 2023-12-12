import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';
import { CONSTANTS } from 'Constants/constants';

export function preparePaymentControlValue(
  amountControl,
  paymentControl,
  termControl,
) {
  const calcAnnuityPaymentsResult = calcAnnuityPayments(
    amountControl.value,
    termControl.value,
    CONSTANTS.ANNUAL_INTEREST_RATE,
  );

  paymentControl.value = Number(
    calcAnnuityPaymentsResult.payments[0].paymentAmount,
  );
  paymentControl.dispatchEvent(new Event('change'));

  return calcAnnuityPaymentsResult;
}
