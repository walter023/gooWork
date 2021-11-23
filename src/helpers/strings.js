export const toUpper = (str = '') =>
  str
    .replace(/_/g, ' ')
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
