import { getLocaleString } from 'UIKit/form-range/_get-locale-string';
import { pluralizer } from 'pluralizer-for-js';
import { getCustomTrackWidth } from 'UIKit/form-range/_get-custom-track-width';

const ranges = document.querySelectorAll('.range');

ranges.forEach((range) => {
  const inputText = range.querySelector('input[type="text"]');
  const inputRange = range.querySelector('input[type="range"]');
  const customTrack = range.querySelector('.range__custom-track');

  [
    range.querySelector('.range__min'),
    range.querySelector('.range__max'),
  ].forEach((extremeValue) => {
    extremeValue.textContent = getLocaleString(
      extremeValue.classList.contains('range__min')
        ? inputRange.min
        : inputRange.max,
    );
  });

  if (inputRange.dataset.startValue) {
    inputRange.value = inputRange.dataset.startValue;
  }

  inputText.value = getLocaleString(inputRange.value);
  customTrack.style.width = getCustomTrackWidth(inputRange);

  range.querySelectorAll('.range__postfix').forEach((postfix) => {
    postfix.textContent = pluralizer(
      Number(postfix.dataset.minPostfix ? inputRange.min : inputRange.max),
      inputText.dataset.pluralizeOne,
      inputText.dataset.pluralizeTwo,
      inputText.dataset.pluralizeFive,
      false,
    );
  });

  inputRange.addEventListener('input', () => {
    inputText.value = getLocaleString(inputRange.value);
    customTrack.style.width = getCustomTrackWidth(inputRange);
  });
});
