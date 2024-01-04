export function getErrorElement(control) {
  if (control.type === 'checkbox' || control.type === 'hidden') {
    return null;
  }

  let errorElem = null;

  if (control.closest('.form-control')) {
    errorElem = control
      .closest('.form-control')
      .querySelector('.form-control__error');
  } else if (control.closest('.form-select')) {
    errorElem = control
      .closest('.form-select')
      .querySelector('.form-select__error');
  } else if (control.closest('.form-file-upload')) {
    errorElem = control
      .closest('.form-file-upload')
      .querySelector('.form-file-upload__error');
  }

  return errorElem;
}
