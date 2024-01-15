import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { NEW_PASSWORD_PAGE } from 'Constants/constants';

export function newPasswordResponseHandler(
  response,
  controlsArrayOrForm,
  defaultErrorControl = null,
) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(
      response,
      controlsArrayOrForm,
      defaultErrorControl,
    );
  } else {
    window.setTimeout(() => {
      window.location.href = document.getElementById(
        NEW_PASSWORD_PAGE.form,
      ).dataset.locationHref;
    }, 5000);
  }
}
