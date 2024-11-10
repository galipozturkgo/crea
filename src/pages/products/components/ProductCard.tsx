import { formatPrice } from '@crea/shared/utils/intl/Intl';
import { Product } from '../Products.types';
import { useNavigate } from 'react-router-dom';
import StarRating from '@crea/shared/components/star-rating/StarRating';

const ProductCard: React.FC<Product> = ({
  id,
  name,
  thumbnail,
  price,
  rating,
}) => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/product/' + id);

  return (
    <li onClick={handleClick} className="cursor-pointer">
      <img src={thumbnail} alt="" className="w-56 h-56 rounded-lg" />

      <div className="flex justify-between">
        <span>{name}</span>
        <span className="text-sky-600">{formatPrice(price)}</span>
      </div>

      <StarRating className="flex justify-end" rating={rating} />
    </li>
  );
};

export default ProductCard;
