import { getErrorText } from 'Utils/errors/get-error-text';

export function showError(errorCode, control) {
  const errorElem = control
    .closest('.form-control')
    .querySelector('.form-control__error');

  errorElem.textContent = getErrorText(errorCode);
  errorElem.classList.add('error_block', 'error_fade');
}
