import { ProductDetail } from '@crea/pages/product/Product.types';

const ProductThumbnail: React.FC<Pick<ProductDetail, 'thumbnail'>> = ({
  thumbnail,
}) => <img src={thumbnail} alt="Product thumbnail" />;

export default ProductThumbnail;
