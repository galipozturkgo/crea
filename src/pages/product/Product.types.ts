import { ProductComment } from './components/product-review/ProductReview.types';

export type ProductDetail = {
  id: number;
  name: string;
  description: string;
  price: number;
  arrival: string;
  thumbnail: string;
  images: string[];
  comments: ProductComment[];
};
