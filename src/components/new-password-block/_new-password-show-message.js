import { NEW_PASSWORD_PAGE } from 'Constants/constants';

export function newPasswordShowMessage(isSuccess) {
  const messageText = document.getElementById(NEW_PASSWORD_PAGE.message);
  const messageBlock = messageText.closest('.new-password-block__message');

  messageBlock.classList.remove(
    'new-password-block__message_success',
    'new-password-block__message_error',
  );

  if (isSuccess) {
    messageText.textContent = messageText.dataset.successMessageText;
    messageBlock.classList.add('new-password-block__message_success');
  } else {
    messageText.textContent = messageText.dataset.errorMessageText;
    messageBlock.classList.add('new-password-block__message_error');
  }
  messageText.classList.remove('visually-hidden');
}
