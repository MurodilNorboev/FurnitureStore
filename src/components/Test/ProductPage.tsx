import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockData, DataType } from './mockData';  // Import mockData

const ProductPage: React.FC = () => {
  const { category, subcategory } = useParams<{ category: keyof DataType; subcategory: string }>();
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    if (
      category &&
      subcategory &&
      mockData[category as keyof typeof mockData] &&
      mockData[category as keyof typeof mockData][subcategory as keyof typeof mockData[]]
    ) {
      setProducts(mockData[category as keyof typeof mockData][subcategory as keyof typeof mockData[]]);
    }
  }, [category, subcategory]);

  return (
    <div style={{paddingTop: "90px"}}>
      <h1>{subcategory?.replace(/^\w/, (c) => c.toUpperCase())} in {category}</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product, index) => <li key={index}>{product}</li>)
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductPage;



