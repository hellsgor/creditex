import { PARTNER_CALCULATOR_CONSTANTS } from 'Constants/constants';
import { getCalculationResult } from 'Components/partner-calculator/_get-calculation-result';

const borrowers = document.getElementById(
  PARTNER_CALCULATOR_CONSTANTS.rangeControls.BORROWERS_NAME_ID,
);
const averageLoanAmount = document.getElementById(
  PARTNER_CALCULATOR_CONSTANTS.rangeControls.AVERAGE_LOAN_AMOUNT_NAME_ID,
);
const result = document.getElementById(PARTNER_CALCULATOR_CONSTANTS.RESULT_ID);

result.textContent = getCalculationResult(averageLoanAmount, borrowers);

[borrowers, averageLoanAmount].forEach((control) => {
  control.addEventListener('input', () => {
    console.log(control.value);
    result.textContent = getCalculationResult(averageLoanAmount, borrowers);
  });
});
