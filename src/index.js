import { multiplyingFactor, rates } from './config.js';

const convertAndNormalizePrice = (price) => {
  if (price === 0) {
    return 0;
  }
  if (price === null || price === undefined || typeof price !== 'number') {
    throw new Error('Not valid price');
  }

  const { rate } = rates.find((range) => price <= range.maxPrice);
  const convertedPrice = price * multiplyingFactor * rate;

  // Normalize the result to end with 90
  const ninetyEndedPrice = Math.ceil(convertedPrice / 100) * 100 - 10;

  // If result price is lower add 100 Rub
  return ninetyEndedPrice > convertedPrice
    ? ninetyEndedPrice
    : ninetyEndedPrice + 100;
};

export { convertAndNormalizePrice };
