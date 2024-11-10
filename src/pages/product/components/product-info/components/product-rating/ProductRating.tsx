import StarRating from '@crea/shared/components/star-rating/StarRating';
import { ProductRatingProps } from './ProductRating.types';

const ProductRating: React.FC<ProductRatingProps> = ({
  averageRating,
  commentCount,
}) => (
  <div className="flex justify-between">
    <div className="space-x-2">
      <StarRating rating={averageRating} />
      {averageRating}
    </div>
    <div>Total review {commentCount}</div>
  </div>
);

export default ProductRating;
