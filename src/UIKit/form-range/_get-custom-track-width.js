export function getCustomTrackWidth(inputRange) {
  return `${(inputRange.value / (inputRange.max - inputRange.min)) * 100 - 2}%`;
}
