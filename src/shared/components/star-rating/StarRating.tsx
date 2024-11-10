import React from 'react';
import { StarRatingProps } from './StarRating.types';
import classNames from 'classnames';

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <span className={classNames('text-orange-500', className)}>
      {'★'.repeat(filledStars)}
      {'☆'.repeat(emptyStars)}
    </span>
  );
};

export default StarRating;
