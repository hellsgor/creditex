export function showEmpty(dropZone) {
  dropZone
    .querySelector('#empty')
    .classList.remove('form-file-upload__text_hidden');
  dropZone
    .querySelector('#loaded')
    .classList.add('form-file-upload__text_hidden');
}
