import { getRange } from 'Components/annuity-calculator/_get-range';
import { REGULAR_ANNUITY_CALCULATOR_CONSTANTS } from 'Constants/constants';
import { getLocaleString } from 'Utils/get-locale-string';
import { pluralizer } from 'pluralizer-for-js';

export function convertControlValue(control, controls) {
  ['change', 'blur', 'keydown'].forEach((type) => {
    control.addEventListener(type, (event) => {
      const { target, keyCode } = event;
      const range = getRange(target, controls);

      if (range) {
        if (
          (type === 'change' || type === 'blur')
          && Number(target.value) <= Number(range.max)
          && Number(target.value) >= Number(range.min)
        ) {
          if (type === 'change') {
            range.value = target.value;
            range.dispatchEvent(new Event('input'));
          }

          if (
            target.id
              === REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeTextControls
                .TERM_TEXT_NAME_ID
            && type === 'blur'
          ) {
            target.value = pluralizer(
              target.value,
              'месяц',
              'месяца',
              'месяцев',
              true,
            );
          }

          if (
            target.id
            === REGULAR_ANNUITY_CALCULATOR_CONSTANTS.rangeTextControls
              .AMOUNT_TEXT_NAME_ID
          ) {
            target.value = getLocaleString(target.value);
          }
        } else if (type === 'keydown' && keyCode === 13) {
          target.blur();
        }
      }
    });
  });
}
