export function calcAnnuityPayments(loanAmount, loanTerm, annualInterestRate) {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const totalPayments = loanTerm;
  const annuityCoefficient = (monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments)
    / ((1 + monthlyInterestRate) ** totalPayments - 1);

  const payments = [];

  let remainingLoanAmount = loanAmount;

  for (let month = 1; month <= totalPayments; month++) {
    const interestPayment = remainingLoanAmount * monthlyInterestRate;
    const principalPayment = annuityCoefficient * loanAmount - interestPayment;
    remainingLoanAmount -= principalPayment;

    const totalPayment = principalPayment + interestPayment;

    payments.push({
      month,
      mainDebt: `${((principalPayment / totalPayment) * 100).toFixed(2)}%`,
      percent: `${((interestPayment / totalPayment) * 100).toFixed(2)}%`,
      paymentAmount: totalPayment.toFixed(2),
      principalPayment: principalPayment.toFixed(2),
      interestPayment: interestPayment.toFixed(2),
    });
  }

  return {
    loanAmount,
    loanTerm,
    payments,
  };
}
