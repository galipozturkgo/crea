import { ProductReviewProps } from './ProductReview.types';
import ListComment from './components/list-comment/ListComment';
import AddComment from './components/add-comment/AddComment';
import { ProductComment } from './components/list-comment/ListComment.types';
import StarRating from '@crea/shared/components/star-rating/StarRating';

const ProductReview: React.FC<ProductReviewProps> = ({
  comments,
  averageRating,
  commentCount,
  updateComments,
}) => {
  const handleAddedComment = (added: ProductComment) => {
    const updatedComments = [...comments, added];

    updateComments(updatedComments);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold space-x-2">
        <span className=" text-blue-500">{commentCount} Customer reviews</span>
        <span className="text-orange-500">
          | <StarRating rating={averageRating} />{' '}
          <strong>{averageRating}</strong>
        </span>
      </h2>

      <ListComment comments={comments} />

      <AddComment addedComment={handleAddedComment} />
    </div>
  );
};

export default ProductReview;
