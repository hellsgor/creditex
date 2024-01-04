export function showUploaded(dropZone) {
  dropZone
    .querySelector('#loaded')
    .classList.remove('form-file-upload__text_hidden');
  dropZone
    .querySelector('#empty')
    .classList.add('form-file-upload__text_hidden');
}
