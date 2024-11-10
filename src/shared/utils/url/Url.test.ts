import { joinPaths } from './Url';

describe('joinPaths', () => {
  it('should correctly join base and path without slashes', () => {
    const base = 'https://example.com';
    const path = 'test';
    const expectedOutput = 'https://example.com/test';

    const result = joinPaths(base, path);
    expect(result).toBe(expectedOutput);
  });

  it('should handle base URL with trailing slash and path without leading slash', () => {
    const base = 'https://example.com/';
    const path = 'test';
    const expectedOutput = 'https://example.com/test';

    const result = joinPaths(base, path);
    expect(result).toBe(expectedOutput);
  });

  it('should handle path with leading slash and base without trailing slash', () => {
    const base = 'https://example.com';
    const path = '/test';
    const expectedOutput = 'https://example.com/test';

    const result = joinPaths(base, path);
    expect(result).toBe(expectedOutput);
  });
});
