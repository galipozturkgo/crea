import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ImageSlider from './ImageSlider';
import { ImageSliderProps } from './ImageSlider.types';

describe('ImageSlider component', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  it('renders the first image initially', () => {
    const props: ImageSliderProps = { images };
    render(<ImageSlider {...props} />);

    const firstImage = screen.getByAltText('Slide 1');
    expect(firstImage).toBeTruthy();
    expect(firstImage.getAttribute('src')).toBe('image1.jpg');
  });

  it('navigates to the next image when "next" button is clicked', () => {
    const props: ImageSliderProps = { images };
    render(<ImageSlider {...props} />);

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    const secondImage = screen.getByAltText('Slide 2');
    expect(secondImage).toBeTruthy();
    expect(secondImage.getAttribute('src')).toBe('image2.jpg');
  });

  it('navigates to the previous image when "previous" button is clicked', () => {
    const props: ImageSliderProps = { images };
    render(<ImageSlider {...props} />);

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);

    const firstImage = screen.getByAltText('Slide 1');
    expect(firstImage).toBeTruthy();
    expect(firstImage.getAttribute('src')).toBe('image1.jpg');
  });

  it('wraps to the last image when "previous" is clicked on the first image', () => {
    const props: ImageSliderProps = { images };
    render(<ImageSlider {...props} />);

    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);

    const lastImage = screen.getByAltText('Slide 3');
    expect(lastImage).toBeTruthy();
    expect(lastImage.getAttribute('src')).toBe('image3.jpg');
  });

  it('wraps to the first image when "next" is clicked on the last image', () => {
    const props: ImageSliderProps = { images };
    render(<ImageSlider {...props} />);

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    fireEvent.click(nextButton);

    const firstImage = screen.getByAltText('Slide 1');
    expect(firstImage).toBeTruthy();
    expect(firstImage.getAttribute('src')).toBe('image1.jpg');
  });
});
