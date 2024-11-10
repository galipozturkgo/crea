import { ProductDetail } from '@crea/pages/product/Product.types';

export type ProductDetailsProps = Pick<
  ProductDetail,
  'name' | 'price' | 'arrival' | 'description'
> & {
  formatPrice: (price: number) => string;
  formatDate: (date: string) => string;
};
