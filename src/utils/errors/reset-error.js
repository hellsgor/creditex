export function resetError(control) {
  const errorElem = control
    .closest('.form-control')
    .querySelector('.form-control__error');

  errorElem.classList.remove('error_fade');
  window.setTimeout(() => {
    errorElem.classList.remove('error_block');
    errorElem.textContent = '';
  }, 300);
}
