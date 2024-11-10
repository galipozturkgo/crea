import { ProductComment } from '../list-comment/ListComment.types';

export interface AddCommentProps {
  addedComment: (comment: ProductComment) => void;
}
