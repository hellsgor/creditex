import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';
import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';
import { getLocaleString } from 'Utils/get-locale-string';
import { pluralizer } from 'pluralizer-for-js';

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

  paymentControl.value = `${getLocaleString(
    Math.round(calcAnnuityPaymentsResult.payments[0].paymentAmount),
  )} ${pluralizer(
    Math.round(calcAnnuityPaymentsResult.payments[0].paymentAmount),
    'рубль',
    'рубля',
    'рублей',
    false,
  )}`;

  return calcAnnuityPaymentsResult;
}
