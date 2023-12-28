export const REGULAR_ANNUITY_CALCULATOR_CONSTANTS = {
  ANNUAL_INTEREST_RATE: 9,
  rangeControls: {
    AMOUNT_NAME_ID: 'range-control-calculator-amount',
    PAYMENT_NAME_ID: 'form-control-calculator-payment',
    TERM_NAME_ID: 'range-control-calculator-term',
  },
  rangeTextControls: {
    AMOUNT_TEXT_NAME_ID: 'range-control-text-calculator-amount',
    TERM_TEXT_NAME_ID: 'range-control-text-calculator-term',
  },
  GRAPH_BLOCK_ID: 'calculator-graph',
};

export const PARTNER_CALCULATOR_CONSTANTS = {
  rangeControls: {
    BORROWERS_NAME_ID: 'range-control-partner-calc-number-of-borrowers',
    AVERAGE_LOAN_AMOUNT_NAME_ID:
      'range-control-partner-calc-average-loan-amount',
  },
  RESULT_ID: 'partner-calc-result',
};

export const AUTHORIZATION_PAGE_CONSTANTS = {
  rememberUserCheckbox: 'auth-remember-user',
  phoneControl: 'auth-phone',
  passwordControl: 'auth-password',
  comeInButton: 'auth-come-in-button',
  authorization_form: 'authorization-form',
};

export const REGISTRATION_PAGE_CONSTANTS = {
  registrationForm: 'registration-form',
  registrationFormControls: {
    userTypeControl: 'registration-user-type',
    innControl: 'registration-inn',
    phoneControl: 'registration-phone',
    passwordControl: 'registration-password',
    repeatPasswordControl: 'registration-repeat-password',
    rememberUserCheckbox: 'registration-remember-user',
  },
  toAuthButton: 'registration-to-auth-button',
  comeInButton: 'registration-come-in-button',
};

export const CONFIRMATION_PAGE_CONSTANTS = {
  confirmationForm: 'confirmation-form',
  confirmationFormControls: {
    confirmationCodeControl: 'confirmation-code',
    confirmationSignedData: 'confirmation-signed-data',
  },
  confirmationForwardButton: 'confirmation-forward-button',
};

export const RESTORE_PASSWORD_REQUEST_PAGE_CONSTANTS = {
  restorePasswordRequestForm: 'restore-password-request-form',
  restorePasswordRequestFormControls: {
    restorePasswordPhoneNumber: 'restore-password-phone-number',
  },
  restorePasswordRequestForwardButton:
    'restore-password-request-forward-button',
};

export const NEW_PASSWORD_PAGE_CONSTANTS = {
  newPasswordForm: 'new-password-form',
  newPasswordFormControls: {
    newPasswordConfirmationCodeControl: 'new-password-confirmation-code',
    newPasswordControl: 'new-password-password',
    newPasswordRepeatControl: 'new-password-password-repeat',
  },
  newPasswordChangeButton: 'new-password-change-password-button',
};

export const COMMON_CONSTANTS = {
  MIN_PASSWORD_LENGTH: 6,
};
