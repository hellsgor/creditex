import { serializeData } from 'Utils/handle-form-submit/_serialize-data';
import { sendData } from 'Utils/handle-form-submit/_send-data';

export async function handleFormSubmit(
  controlsArrayOrForm,
  url,
  responseHandlerFunction,
  waitResponse,
  defaultErrorControl = null,
) {
  const data = serializeData(controlsArrayOrForm);
  const response = await sendData(data, url, waitResponse);
  responseHandlerFunction(response, controlsArrayOrForm, defaultErrorControl);
}
