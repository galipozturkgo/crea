import { render, screen } from '@testing-library/react';
import ProductThumbnail from './ProductThumbnail';

describe('ProductThumbnail component', () => {
  it('should render the image with the provided thumbnail URL', () => {
    const thumbnail = 'http://example.com/thumbnail.jpg';

    render(<ProductThumbnail thumbnail={thumbnail} />);

    const imageElement = screen.getByAltText('Product thumbnail');

    expect(imageElement).toBeTruthy();
    expect(imageElement.getAttribute('src')).toBe(thumbnail);
  });

  it('should have the correct alt text', () => {
    const thumbnail = 'http://example.com/thumbnail.jpg';

    render(<ProductThumbnail thumbnail={thumbnail} />);

    const imageElement = screen.getByAltText('Product thumbnail');

    expect(imageElement.getAttribute('alt')).toBe('Product thumbnail');
  });
});
