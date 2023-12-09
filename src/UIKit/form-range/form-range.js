import { getLocaleString } from 'UIKit/form-range/_get-locale-string';
import { pluralizer } from 'pluralizer-for-js';
import { getCustomTrackWidth } from 'UIKit/form-range/_get-custom-track-width';

const ranges = document.querySelectorAll('.range');

ranges.forEach((range) => {
  const inputText = range.querySelector('input[type="text"]');
  const inputRange = range.querySelector('input[type="range"]');
  const customTrack = range.querySelector('.range__custom-track');
  const minValueElement = range.querySelector('.range__min');
  const maxValueElement = range.querySelector('.range__max');

  if (inputRange.dataset.isYears === 'true') {
    inputRange.min *= 12;
    inputRange.max *= 12;
    inputRange.dataset.startValue *= 12;
  }

  [minValueElement, maxValueElement].forEach((extremeValue) => {
    extremeValue.textContent = getLocaleString(extremeValue.textContent);
  });

  if (inputRange.dataset.startValue) {
    inputRange.value = inputRange.dataset.startValue;
  }

  inputText.value = getLocaleString(
    inputRange.value,
    inputRange.dataset.isYears === 'true',
  );
  customTrack.style.width = getCustomTrackWidth(inputRange);

  range.querySelectorAll('.range__postfix').forEach((postfix) => {
    postfix.textContent = pluralizer(
      Number(
        postfix.dataset.minPostfix
          ? range.querySelector('.range__min').textContent
          : range.querySelector('.range__max').textContent,
      ),
      inputText.dataset.pluralizeOne,
      inputText.dataset.pluralizeTwo,
      inputText.dataset.pluralizeFive,
      false,
    );
  });

  inputRange.addEventListener('input', () => {
    inputText.value = getLocaleString(
      inputRange.value,
      inputRange.dataset.isYears === 'true',
    );
    customTrack.style.width = getCustomTrackWidth(inputRange);
  });
});
