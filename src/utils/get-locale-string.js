import { pluralizer } from 'pluralizer-for-js';

export function getLocaleString(str, isYears) {
  if (isYears) {
    return pluralizer(Number(str), 'месяц', 'месяца', 'месяцев', true);
  }

  return Number(str).toLocaleString('ru-RU', {
    style: 'decimal',
  });
}
