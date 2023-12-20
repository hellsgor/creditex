export function showError(errorFunc, control) {
  const errorElem = control
    .closest('.form-control')
    .querySelector('.form-control__error');

  errorElem.textContent = errorFunc;
  errorElem.classList.add('error_block', 'error_fade');
}
