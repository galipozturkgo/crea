import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StarRating from './StarRating';

describe('StarRating component', () => {
  it('renders 5 filled stars for a rating of 5', () => {
    render(<StarRating rating={5} />);

    const starRating = screen.getByText('★★★★★');
    expect(starRating).toBeTruthy();
    expect(starRating.getAttribute('class')).toBe('text-orange-500');
  });

  it('renders 3 filled stars and 2 empty stars for a rating of 3', () => {
    render(<StarRating rating={3} />);

    const starRating = screen.getByText('★★★☆☆');
    expect(starRating).toBeTruthy();
    expect(starRating.getAttribute('class')).toBe('text-orange-500');
  });

  it('renders 0 filled stars and 5 empty stars for a rating of 0', () => {
    render(<StarRating rating={0} />);

    const starRating = screen.getByText('☆☆☆☆☆');
    expect(starRating).toBeTruthy();
    expect(starRating.getAttribute('class')).toBe('text-orange-500');
  });

  it('renders the correct number of stars for a rating of 2', () => {
    render(<StarRating rating={2} />);

    const starRating = screen.getByText('★★☆☆☆');
    expect(starRating).toBeTruthy();
    expect(starRating.getAttribute('class')).toBe('text-orange-500');
  });

  it('applies custom className passed as a prop', () => {
    render(<StarRating rating={4} className="custom-class" />);

    const starRating = screen.getByText('★★★★☆');
    expect(starRating).toBeTruthy();
    expect(starRating.getAttribute('class')).toBe(
      'text-orange-500 custom-class'
    );
  });
});
