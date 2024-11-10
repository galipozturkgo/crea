import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Mock, vi } from 'vitest';
import { formatPrice } from '@crea/shared/utils/intl/Intl';
import { Product } from '../Products.types';
import { useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('@crea/shared/utils/intl/Intl', () => ({
  formatPrice: vi
    .fn()
    .mockImplementation((price: number) => `₺${price.toFixed(2)}`),
}));

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: 123,
    name: 'Product Name',
    thumbnail: 'http://example.com/product.jpg',
    price: 100,
    rating: 4,
  };

  it('should render product details correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeTruthy();
    expect(screen.getByText('₺100.00')).toBeTruthy();
    expect(screen.getByRole('listitem')).toBeTruthy();
  });

  it('should navigate to the correct product page when clicked', () => {
    const mockNavigate = vi.fn();
    (vi.mocked(useNavigate) as Mock).mockReturnValue(mockNavigate);

    render(<ProductCard {...mockProduct} />);

    fireEvent.click(screen.getByRole('listitem'));

    expect(mockNavigate).toHaveBeenCalledWith('/product/123');
  });

  it('should format the price correctly', () => {
    render(<ProductCard {...mockProduct} />);

    expect(formatPrice).toHaveBeenCalledWith(mockProduct.price);
  });
});
