export async function sendData(method, data, url, waitResponse) {
  let responseJSON = null;
  const params = {
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    method,
  };

  if (method === 'POST') {
    params.body = JSON.stringify(Object.fromEntries(data.entries()));
  }

  try {
    const response = await fetch(url, params);

    if (waitResponse) {
      if (response.redirected) {
        window.location.href = response.url;
      }
      responseJSON = await response.json();
    }
    return responseJSON;
  } catch (e) {
    console.error(e);
    return responseJSON;
  }
}
