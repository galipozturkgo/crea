import { formatDate } from './Date';

describe('formatDate', () => {
  it('should correctly format a date string to MM.DD.YYYY format', () => {
    const inputDate = '2024-11-09T12:00:00Z';
    const expectedOutput = '11.09.2024';
    const result = formatDate(inputDate);

    expect(result).toBe(expectedOutput);
  });

  it('should handle single digit month and day correctly', () => {
    const inputDate = '2024-03-05T12:00:00Z';
    const expectedOutput = '03.05.2024';
    const result = formatDate(inputDate);

    expect(result).toBe(expectedOutput);
  });

  it('should handle invalid date input and return "Invalid Date"', () => {
    const inputDate = 'invalid-date';
    const expectedOutput = 'Invalid Date';
    const result = formatDate(inputDate);

    expect(result).toBe(expectedOutput);
  });
});
