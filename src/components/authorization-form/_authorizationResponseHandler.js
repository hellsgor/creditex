import { errorsProcessingFromResponse } from 'Utils/errors/errors-processing-from-response';
import { isSuccess } from 'Utils/handle-form-submit/_isSuccess';
import { AUTHORIZATION_PAGE_CONSTANTS } from 'Constants/constants';

export function authorizationResponseHandler(
  response,
  controlsArray,
  defaultErrorControl = null,
) {
  if (!isSuccess(response)) {
    errorsProcessingFromResponse(response, controlsArray, defaultErrorControl);
  } else {
    window.location.href = document.getElementById(
      AUTHORIZATION_PAGE_CONSTANTS.authorization_form,
    ).dataset.locationHref;
  }
}
