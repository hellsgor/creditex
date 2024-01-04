import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { createUploadFileElement } from 'UIKit/form-file-upload/_create-upload-file-element';
import { showUploaded } from 'UIKit/form-file-upload/_show-uploaded';
import { addDroppedFile } from 'UIKit/form-file-upload/_add-dropped-file';

export function addFile(event, dropZone, control, isDragAndDrop = false) {
  const loaded = dropZone.querySelector('#loaded');
  const files = isDragAndDrop ? event.dataTransfer.files : control.files;
  const file = files[files.length - 1] ?? null;

  if (isDragAndDrop && files.length === 0) {
    return;
  }

  if (!file) {
    return;
  }

  if (
    !control.accept
      .split(', ')
      .includes(`.${file.name.split('.').pop().toLowerCase()}`)
  ) {
    showError(ERRORS.CE010(), control);
    return;
  }

  if (file.size > control.size) {
    showError(ERRORS.CE011(), control);
    return;
  }

  if (isDragAndDrop) {
    for (let i = 0; i < control.files.length; i++) {
      if (
        control.files.item(i).name === file.name
        && control.files.item(i).size === file.size
      ) {
        showError(ERRORS.CE012(), control);
        return;
      }
    }
    addDroppedFile(control, file);
  }

  loaded.innerHTML = '';
  for (let i = 0; i < control.files.length; i++) {
    loaded.append(
      createUploadFileElement(control, dropZone, control.files.item(i).name),
    );
  }
  showUploaded(dropZone);
}
