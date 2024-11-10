import React from 'react';
import { ProductTabProps } from './ProductTab.types';

const ProductTab: React.FC<ProductTabProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="space-x-3 pb-4">
      <button
        onClick={() => setActiveTab('details')}
        className={
          activeTab === 'details'
            ? 'underline bg-orange-500 py-0.5 px-2 text-white'
            : ''
        }
      >
        Details
      </button>
      <button
        onClick={() => setActiveTab('reviews')}
        className={
          activeTab === 'reviews'
            ? 'underline bg-orange-500 py-0.5 px-2 text-white'
            : ''
        }
      >
        Reviews
      </button>
    </div>
  );
};

export default ProductTab;
