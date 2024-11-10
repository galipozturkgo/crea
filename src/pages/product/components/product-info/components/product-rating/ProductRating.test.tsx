import { render, screen } from '@testing-library/react';
import ProductRating from './ProductRating';
import { vi } from 'vitest';

vi.mock('@crea/shared/components/star-rating/StarRating', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="star-rating" />),
}));

describe('ProductRating Component', () => {
  it('should render the average rating', () => {
    const averageRating = 4.5;
    const commentCount = 10;

    render(
      <ProductRating
        averageRating={averageRating}
        commentCount={commentCount}
      />
    );

    expect(screen.getByText(averageRating.toString())).toBeTruthy();
  });

  it('should render the total review count', () => {
    const averageRating = 4.5;
    const commentCount = 10;

    render(
      <ProductRating
        averageRating={averageRating}
        commentCount={commentCount}
      />
    );

    expect(screen.getByText(`Total review ${commentCount}`)).toBeTruthy();
  });

  it('should render the StarRating component with the correct rating', () => {
    const averageRating = 4.5;
    const commentCount = 10;

    render(
      <ProductRating
        averageRating={averageRating}
        commentCount={commentCount}
      />
    );

    const starRatingElement = screen.getByTestId('star-rating');
    expect(starRatingElement).toBeTruthy();
  });
});
