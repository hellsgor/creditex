export function showError(errorFunc, control) {
  if (control.type === 'checkbox' || control.type === 'hidden') {
    return;
  }

  const errorElem = control.closest('.form-control')
    ? control.closest('.form-control').querySelector('.form-control__error')
    : control.closest('.form-select').querySelector('.form-select__error');

  errorElem.textContent = errorFunc;
  errorElem.classList.add('error_block', 'error_fade');
}
