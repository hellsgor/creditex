import { undoFileOpening } from 'UIKit/form-file-upload/_undoFileOpening';
import { resetError } from 'Utils/errors/reset-error';
import { addFile } from 'UIKit/form-file-upload/_add-file';

const fileControls = document.querySelectorAll('input[type="file"]');

undoFileOpening();

fileControls.forEach((control) => {
  const dropZone = control.closest('#drop-zone');

  dropZone.addEventListener('drop', (event) => {
    resetError(control);
    addFile(event, dropZone, control, true);
  });

  control.addEventListener('change', (event) => {
    resetError(control);
    addFile(event, dropZone, control, false);
  });
});
