import { render, screen, waitFor } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import Products from './Products';
import { useRequest } from '@crea/shared/hooks/useRequest';
import { Product } from './Products.types';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@crea/shared/hooks/useRequest', () => ({
  useRequest: vi.fn(),
}));

const TestComponent = () => {
  return (
    <MemoryRouter>
      <Products />
    </MemoryRouter>
  );
};

describe('Products Component', () => {
  const mockProducts: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      thumbnail: 'http://example.com/product1.jpg',
      price: 100,
      rating: 4,
    },
    {
      id: 2,
      name: 'Product 2',
      thumbnail: 'http://example.com/product2.jpg',
      price: 200,
      rating: 5,
    },
  ];

  it('should display loading state when data is being fetched', () => {
    (useRequest as Mock).mockReturnValue({
      request: vi.fn(),
      isLoading: true,
      hasError: false,
    });

    render(<TestComponent />);

    expect(screen.getByText('Products loading')).toBeTruthy();
  });

  it('should display error state if there is an error fetching products', () => {
    (useRequest as Mock).mockReturnValue({
      request: vi.fn(),
      isLoading: false,
      hasError: true,
    });

    render(<TestComponent />);

    expect(screen.getByText('Products error')).toBeTruthy();
  });

  it('should display "Products not found" when no products are returned', () => {
    (useRequest as Mock).mockReturnValue({
      request: vi.fn(),
      isLoading: false,
      hasError: false,
    });

    render(<TestComponent />);

    expect(screen.getByText('Products not found')).toBeTruthy();
  });

  it('should display products correctly when data is fetched successfully', async () => {
    (useRequest as Mock).mockReturnValue({
      request: vi.fn().mockResolvedValue(mockProducts),
      isLoading: false,
      hasError: false,
    });

    render(<TestComponent />);

    await waitFor(() => screen.getByText('Product 1'));

    expect(screen.getByText('Product 1')).toBeTruthy();
    expect(screen.getByText('Product 2')).toBeTruthy();
    expect(screen.getByText('₺100,00')).toBeTruthy();
    expect(screen.getByText('₺200,00')).toBeTruthy();
    expect(screen.getAllByRole('listitem').length).toBe(mockProducts.length);
  });
});
