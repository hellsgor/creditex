export function getFormFileControls() {
  return Array.from(document.querySelectorAll('input[type="file"]')).map(
    (control) => control.closest('.form-file-upload'),
  );
}
