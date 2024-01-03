import { deleteUploadedFile } from 'UIKit/form-file-upload/_delete-uploaded-file';
import { resetError } from 'Utils/errors/reset-error';

export function createUploadFileElement(control, dropZone, fileName) {
  const uploadFileElement = dropZone
    .querySelector('#loaded-file-template')
    .content.cloneNode(true);
  uploadFileElement.querySelector('p').textContent = fileName;
  const deleteIcon = uploadFileElement.querySelector(
    '.form-file-upload__delete',
  );
  deleteIcon.addEventListener('click', (delEvent) => {
    delEvent.stopPropagation();
    delEvent.preventDefault();
    resetError(control);
    deleteUploadedFile(control, dropZone, deleteIcon);
  });
  return uploadFileElement;
}
