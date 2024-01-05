import { undoFileOpening } from 'UIKit/form-file-upload/_undoFileOpening';
import { resetError } from 'Utils/errors/reset-error';
import { areUniqueFiles } from 'UIKit/form-file-upload/_are-unique-files';
import { filesValidation } from 'UIKit/form-file-upload/_files-validation';
import { showError } from 'Utils/errors/show-error';
import { ERRORS } from 'Constants/errors';
import { setFiles } from 'UIKit/form-file-upload/_set-files';
import { processingAddedFiles } from 'UIKit/form-file-upload/_processing-added-files';

const fileControls = document.querySelectorAll('input[type="file"]');

undoFileOpening();

fileControls.forEach((control) => {
  const dropZone = control.closest('#drop-zone');
  const isPreview = control.dataset.isPreview === 'true';

  dropZone.addEventListener('drop', (event) => {
    resetError(control);

    const files = areUniqueFiles([...event.dataTransfer.files], control);

    if (!control.multiple) {
      if (files.length > 1) {
        showError(ERRORS.CE013(), control);
        return;
      }
    }
    if (filesValidation(files, control)) {
      setFiles(files, control);
      processingAddedFiles(control, isPreview);
    }
  });
});
