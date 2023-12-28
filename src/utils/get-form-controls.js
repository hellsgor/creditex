export function getFormControls(form) {
  const controlsArray = [];
  const controlsTags = ['input', 'select'];

  controlsTags.forEach((tag) => {
    form.querySelectorAll(tag).forEach((control) => {
      controlsArray.push(control);
    });
  });

  return controlsArray;
}
