import { convertAndNormalizePrice } from "../src";

describe('Test Price Conversion', () => {
  it('should convert and normalize price', () => {
    expect(convertAndNormalizePrice(0)).toEqual(0);
    expect(convertAndNormalizePrice(23)).toEqual(290);
    expect(convertAndNormalizePrice(5000)).toEqual(19490);
  });

  test('should converted price to end with 90', () => {
    const prices = [50, 150, 1250];
    prices.forEach(price => {
      const convertedPrice = convertAndNormalizePrice(price);
      expect(convertedPrice.toString()).toMatch(/90$/);
    });
  });

  test('should throw an error for null price input', () => {
    expect(() => convertAndNormalizePrice(null)).toThrow('Not valid price');
  });
  
  test('should throw an error for invalid price input (string)', () => {
    expect(() => convertAndNormalizePrice('123.456')).toThrow('Not valid price');
  });
})
