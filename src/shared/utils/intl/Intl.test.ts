import { formatPrice } from './Intl';

describe('formatPrice', () => {
  it('should correctly format price as TRY currency', () => {
    const price = 1234.56;
    const expectedOutput = '₺1.234,56';

    const result = formatPrice(price);
    expect(result).toBe(expectedOutput);
  });

  it('should correctly format zero price as TRY currency', () => {
    const price = 0;
    const expectedOutput = '₺0,00';

    const result = formatPrice(price);
    expect(result).toBe(expectedOutput);
  });
});
