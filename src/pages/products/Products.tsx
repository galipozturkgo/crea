import ProductCard from './components/ProductCard';
import { useRequest } from '@crea/shared/hooks/useRequest';
import { Product } from './Products.types';
import { useCallback, useEffect, useState } from 'react';

const Products = () => {
  const { request, isLoading, hasError } = useRequest();
  const [products, setProducts] = useState<Product[]>([]);

  const fetch = useCallback(async () => {
    const res = await request<Product[]>({ url: '/products' });

    if (res) {
      setProducts(res);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  if (isLoading) {
    return <div>Products loading</div>;
  }

  if (hasError) {
    return <div>Products error</div>;
  }

  if (!products.length) {
    return <div>Products not found</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold border-b pb-6 mb-6">Products</h1>

      <ul className="flex gap-4">
        {products.map((product, key) => (
          <ProductCard key={key} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
