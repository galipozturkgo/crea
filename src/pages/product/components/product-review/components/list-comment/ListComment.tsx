import StarRating from '@crea/shared/components/star-rating/StarRating';
import { ListCommentProps } from './ListComment.types';

const ListComment: React.FC<ListCommentProps> = ({ comments }) => {
  return (
    <ul className="space-y-4 bg-zinc-50 p-4">
      {comments.map((comment, key) => (
        <li key={key} className="border-b">
          <p className="space-x-2">
            <strong>{comment.user}</strong>
            <StarRating rating={comment.rating} />
          </p>
          <p>{comment.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListComment;
