export interface ProductComment {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

export interface ListCommentProps {
  comments: ProductComment[];
}
