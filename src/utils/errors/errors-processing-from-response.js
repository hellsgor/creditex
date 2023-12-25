import { ERRORS } from 'Constants/errors';
import { showError } from 'Utils/errors/show-error';

export function errorsProcessingFromResponse(
  response,
  controlsArray,
  defaultErrorControl = null,
) {
  if (Array.isArray(controlsArray)) {
    controlsArray.forEach((control) => {
      control.removeAttribute('readonly');
      response['error-info'].forEach((controlError) => {
        if (controlError['control-name'] === control.name) {
          showError(
            controlError['control-name'] === control.name
              ? controlError['error-text']
              : ERRORS.CE003(),
            control,
          );
        } else if (
          defaultErrorControl
          && (controlError['control-name'] === undefined
            || controlError['control-name'] === 'undefined')
        ) {
          showError(ERRORS.CE004, defaultErrorControl);
        }
      });
    });
  }
}
