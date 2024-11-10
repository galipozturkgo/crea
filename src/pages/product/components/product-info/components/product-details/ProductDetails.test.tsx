import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';
import { vi } from 'vitest';

const mockFormatPrice = vi.fn((price: number) => `₺${price}`);
const mockFormatDate = vi.fn((date: string) =>
  new Date(date).toLocaleDateString()
);

describe('ProductDetails Component', () => {
  const productDetails = {
    name: 'Product Name',
    price: 100,
    arrival: '2024-11-01',
    description: 'This is a product description.',
  };

  it('should render product name', () => {
    render(
      <ProductDetails
        {...productDetails}
        formatPrice={mockFormatPrice}
        formatDate={mockFormatDate}
      />
    );

    expect(screen.getByText(productDetails.name)).toBeTruthy();
  });

  it('should render product price formatted using formatPrice', () => {
    render(
      <ProductDetails
        {...productDetails}
        formatPrice={mockFormatPrice}
        formatDate={mockFormatDate}
      />
    );

    expect(mockFormatPrice).toHaveBeenCalledWith(productDetails.price);
    expect(screen.getByText('₺100')).toBeTruthy();
  });

  it('should render product description', () => {
    render(
      <ProductDetails
        {...productDetails}
        formatPrice={mockFormatPrice}
        formatDate={mockFormatDate}
      />
    );

    expect(screen.getByText(productDetails.description)).toBeTruthy();
  });
});
