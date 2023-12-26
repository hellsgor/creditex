export function resetError(control) {
  const errorElem = control.closest('.form-control')
    ? control.closest('.form-control').querySelector('.form-control__error')
    : control.closest('.form-select').querySelector('.form-select__error');

  if (
    errorElem.classList.contains('error_fade')
    && errorElem.classList.contains('error_block')
  ) {
    errorElem.classList.remove('error_fade');
    errorElem.classList.remove('error_block');
    errorElem.textContent = '';
  }
}
