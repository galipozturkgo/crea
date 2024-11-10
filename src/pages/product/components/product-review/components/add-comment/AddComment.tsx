import { useAuth } from '@crea/shared/contexts/auth-context/AuthContext';
import { AddCommentProps } from './AddComment.types';
import { useState } from 'react';
import Button from '@crea/shared/components/button/Button';
import SelectInput from '@crea/shared/components/select-input/SelectInput';
import TextareaInput from '@crea/shared/components/textarea-input/TextareaInput';

const AddComment: React.FC<AddCommentProps> = ({ addedComment }) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(5);

  const addComment = () => {
    if (newComment.trim() === '') {
      return;
    }

    addedComment({
      id: Date.now(),
      user: user?.user || 'Guest',
      rating: newRating,
      comment: newComment,
    });

    setNewComment('');
    setNewRating(5);
  };

  return (
    <div className="space-y-4">
      <h3 className="border-b font-semibold text-blue-500">Add your review</h3>

      <div className="bg-zinc-50 p-4 space-y-5">
        <SelectInput<number>
          options={[1, 2, 3, 4, 5]}
          value={newRating}
          onChange={setNewRating}
          label="Rating:"
          renderOption={(option) => `${option} ⭐`}
        />

        <div className="space-y-2 max-w-96">
          <TextareaInput
            label="Comment:"
            value={newComment}
            onChange={setNewComment}
            placeholder="Write your comment here"
          />

          <Button
            className="flex ml-auto"
            onClick={addComment}
            label="Submit review"
          />
        </div>
      </div>
    </div>
  );
};

export default AddComment;
