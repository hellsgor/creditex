import { changedPaymentControl } from 'Components/annuity-calculator/_changed-payment-control';
import { calcAnnuityPayments } from 'Components/annuity-calculator/_calc-annuity-payments';

const annualInterestRate = 9;

const amountNameID = 'range-control-calculator-amount';
const paymentNameID = 'range-control-calculator-payment';
const termNameID = 'range-control-calculator-term';

const amountControl = document.getElementById(amountNameID);
const paymentControl = document.getElementById(paymentNameID);
const termControl = document.getElementById(termNameID);

let calcAnnuityPaymentsResult = calcAnnuityPayments(
  amountControl.value,
  termControl.value,
  annualInterestRate,
);
console.log(calcAnnuityPaymentsResult);
paymentControl.value = Number(
  calcAnnuityPaymentsResult.payments[0].paymentAmount,
);
paymentControl.dispatchEvent(new Event('change'));

[amountControl, paymentControl, termControl].forEach((control) => {
  if (control) {
    // eslint-disable-next-line no-use-before-define
    control.addEventListener('input', handleInputChange);
  }
});

function handleInputChange(event) {
  calcAnnuityPaymentsResult = calcAnnuityPayments(
    amountControl.value,
    termControl.value,
    annualInterestRate,
  );

  switch (event.target.name) {
    case amountNameID:
      paymentControl.value = calcAnnuityPayments(
        amountControl.value,
        termControl.value,
        annualInterestRate,
      ).payments[0].paymentAmount;
      paymentControl.dispatchEvent(new Event('input'));
      break;
    case paymentNameID:
      changedPaymentControl(
        event.target.value,
        amountControl,
        termControl,
        annualInterestRate,
      );
      break;
    default:
      paymentControl.value = calcAnnuityPayments(
        amountControl.value,
        termControl.value,
        annualInterestRate,
      ).payments[0].paymentAmount;
      paymentControl.dispatchEvent(new Event('input'));
      break;
  }

  console.log(calcAnnuityPaymentsResult);
}
