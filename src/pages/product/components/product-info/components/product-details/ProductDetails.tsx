import { ProductDetailsProps } from './ProductDetails.types';

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  arrival,
  description,
  formatPrice,
  formatDate,
}) => (
  <div>
    <div className="flex justify-between">
      <span>{name}</span>
      <span className="p-0.5 text-red-600 underline">{formatPrice(price)}</span>
    </div>
    <div className="text-sm">Arrival date {formatDate(arrival)}</div>
    <div className="bg-white text-xs p-1">{description}</div>
  </div>
);

export default ProductDetails;
