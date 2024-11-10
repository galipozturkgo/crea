import { ProductComment } from './components/list-comment/ListComment.types';

export interface ProductReviewProps {
  averageRating: number;
  comments: ProductComment[];
  commentCount: number;
  updateComments: (comments: ProductComment[]) => void;
}
