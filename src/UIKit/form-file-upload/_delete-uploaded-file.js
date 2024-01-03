import { showEmpty } from 'UIKit/form-file-upload/_show-empty';

export function deleteUploadedFile(control, dropZone, delIcon) {
  const dt = new DataTransfer();
  Array.from(control.files)
    .filter(
      (file) => file.name
        !== delIcon.closest('.form-file-upload__loaded-file').querySelector('p')
          .textContent,
    )
    .forEach((file) => {
      dt.items.add(file);
    });
  control.files = dt.files;

  delIcon.closest('.form-file-upload__loaded-file').remove();

  if (!control.files.length) {
    console.log('showEmpty');
    showEmpty(dropZone);
  }
}
