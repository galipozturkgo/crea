import { formatPrice } from '@crea/shared/utils/intl/Intl';
import { formatDate } from '@crea/shared/utils/date/Date';
import ImageSlider from '@crea/shared/components/image-slider/ImageSlider';
import { ProductInfoProps } from './ProductInfo.types';
import ProductImage from './components/product-thumbnail/ProductThumbnail';
import ProductDetails from './components/product-details/ProductDetails';
import ProductRating from './components/product-rating/ProductRating';

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  averageRating,
  commentCount,
}) => {
  const { name, description, price, arrival, thumbnail, images } = product;

  return (
    <div className="flex gap-2">
      <div className="bg-zinc-100 w-96 space-y-4 p-4">
        <ProductImage thumbnail={thumbnail} />
        <ProductDetails
          name={name}
          price={price}
          arrival={arrival}
          description={description}
          formatPrice={formatPrice}
          formatDate={formatDate}
        />
        <ProductRating
          averageRating={averageRating}
          commentCount={commentCount}
        />
      </div>

      <ImageSlider images={images} />
    </div>
  );
};

export default ProductInfo;
