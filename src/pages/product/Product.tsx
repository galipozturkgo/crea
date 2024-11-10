import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useRequest } from '@crea/shared/hooks/useRequest';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProductDetail } from './Product.types';
import { ProductTabs } from './components/product-tab/ProductTab.types';
import ProductTab from './components/product-tab/ProductTab';
import ProductInfo from './components/product-info/ProductInfo';
import ProductReview from './components/product-review/ProductReview';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { request, isLoading, hasError } = useRequest();
  const [product, setProduct] = useState<ProductDetail>();
  const [activeTab, setActiveTab] = useState<ProductTabs>('details');

  const fetch = useCallback(
    async (id: string) => {
      const res = await request<ProductDetail>({ url: '/product/' + id });

      if (res) {
        setProduct(res);
      }
    },
    [id]
  );

  useEffect(() => {
    id && fetch(id);
  }, [id]);

  const { averageRating, commentCount } = useMemo(() => {
    if (product) {
      return {
        averageRating: Math.round(
          product.comments.reduce((sum, comment) => sum + comment.rating, 0) /
            product.comments.length
        ),
        commentCount: product.comments.length,
      };
    } else {
      return {
        averageRating: 0,
        commentCount: 0,
      };
    }
  }, [product]);

  if (!id) {
    return <Navigate to="/products" replace />;
  }

  if (isLoading) {
    return <div>Product loading</div>;
  }

  if (hasError) {
    return <div>Product error</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1
        className="cursor-pointer border-b pb-6 mb-6"
        onClick={() => navigate('/')}
      >
        {' '}
        {'< '} Products
      </h1>

      <ProductTab activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'details' ? (
        <ProductInfo
          product={product}
          averageRating={averageRating}
          commentCount={commentCount}
        />
      ) : (
        <ProductReview
          averageRating={averageRating}
          comments={product.comments}
          commentCount={commentCount}
          updateComments={(comments) => setProduct({ ...product, comments })}
        />
      )}
    </div>
  );
};

export default Product;
