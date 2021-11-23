export const toUpper = (str = '') =>
  str
    .replace(/_/g, ' ')
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');

export const maskMoneyString = value => {
  const formatter = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });
  if (value) {
    return formatter.format(parseFloat(value));
  }
  return formatter.format(0);
};
