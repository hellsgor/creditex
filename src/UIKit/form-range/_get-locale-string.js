export function getLocaleString(str) {
  return Number(str).toLocaleString('ru-RU', {
    style: 'decimal',
  });
}
