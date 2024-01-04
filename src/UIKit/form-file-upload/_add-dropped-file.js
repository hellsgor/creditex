export function addDroppedFile(control, file) {
  const dataTransfer = new DataTransfer();
  if (control.multiple) {
    Array.from(control.files).forEach((uploadedFile) => {
      dataTransfer.items.add(uploadedFile);
    });
  }
  dataTransfer.items.add(new File([file], file.name));
  control.files = dataTransfer.files;
}
