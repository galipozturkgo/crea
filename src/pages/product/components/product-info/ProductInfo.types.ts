import { ProductDetail } from '../../Product.types';

export type ProductInfoProps = {
  product: Pick<
    ProductDetail,
    'name' | 'description' | 'price' | 'arrival' | 'thumbnail' | 'images'
  >;
  averageRating: number;
  commentCount: number;
};
