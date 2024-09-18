import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filteredProducts = [...products]; 
      
      // Filter products by category and subCategory
      filteredProducts = filteredProducts.filter((item) => item.category === category);
      filteredProducts = filteredProducts.filter((item) => item.subCategory === subCategory);

      // Set the related products (limiting to 5 products)
      setRelated(filteredProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div>
      <div className='my-24'>
        <div className='text-center text-3xl py-20'>
          <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
