import { COMMON_CONSTANTS } from 'Constants/constants';

export const ERRORS = {
  CE001: () => 'Некорректный номер телефона',
  CE002: () => 'Некорректное значение поля',
  CE003: () => 'Неизвестная ошибка',
  CE004: () => 'Неверный логин или пароль',
  CE005: () => `Пароль не может быть короче ${COMMON_CONSTANTS.MIN_PASSWORD_LENGTH} символов`,
  CE006: () => 'Пароли не совпадают',
  CE007: () => 'Выберите тип пользователя',
  CE008: () => 'Введите код',
  CE009: () => 'Некорректный адрес электронной почты',
  CE010: (file) => `Тип файла ${file.name} не соответствует ожидаемым`,
  CE011: (file) => `Размер файла ${file.name} превышает допустимый`,
  CE012: (file) => `Ожидается один файл, а не несколько. Добавлен только ${file.name}`,
  CE013: () => 'Поле не может быть пустым',
  CE014: () => 'Выберите одно из значений',
  CE015: () => 'Сначала выберите форму регистрации',
};
