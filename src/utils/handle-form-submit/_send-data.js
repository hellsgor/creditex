export async function sendData(data, url, waitResponse) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      // TODO: изменить на POST и добавить тело запроса
      method: 'GET', // 'POST'
      // body: data,
    });
    if (waitResponse) {
      return await response.json();
    }
  } catch (e) {
    console.error(e);
  }
}
