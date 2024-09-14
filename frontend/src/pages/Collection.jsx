import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdownIcon from '../assets/dropdown_icon.png';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState('relevant'); 
  const [filters, setFilters] = useState({ categories: [], types: [], search: '' });
  const [loading, setLoading] = useState(false);

  // Function to handle sorting the products
  const sortProducts = (products, order) => {
    switch(order) {
      case 'low-high': return [...products].sort((a, b) => a.price - b.price);
      case 'high-low': return [...products].sort((a, b) => b.price - a.price);
      case 'alphabetical': return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default: return products;
    }
  };

  // Function to handle filtering products by category, type, and search query
  const filterProducts = (products) => {
    return products.filter(product => {
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
      const matchesType = filters.types.length === 0 || filters.types.includes(product.subCategory);
      const matchesSearch = filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase());
      return matchesCategory && matchesType && matchesSearch;
    });
  };

  // Function to handle filter updates
  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => {
      const newFilter = prev[filterKey].includes(value)
        ? prev[filterKey].filter(item => item !== value)
        : [...prev[filterKey], value];
      return { ...prev, [filterKey]: newFilter };
    });
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setFilters(prev => ({ ...prev, search: event.target.value }));
  };

  // Apply filters, sorting, and show a loading indicator
  const filteredProducts = filterProducts(products);
  const sortedProducts = sortProducts(filteredProducts, sortOrder);

  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t'>
      {/* Filters Section */}
      <div className='sm:min-w-60 w-full sm:w-1/4'>
        <div className='my-4 text-xl flex items-center justify-between cursor-pointer border-b-2 border-gray-300 pb-2'>
          <span className='font-semibold'>FILTERS</span>
          <img
            className={`h-3 sm:hidden transform ${showFilter ? 'rotate-90' : ''}`}
            src={dropdownIcon}
            alt='dropdown-icon'
            onClick={() => setShowFilter(!showFilter)}
          />
          <span className='text-sm text-gray-500 sm:hidden'>
            {showFilter ? 'Hide' : 'Show'}
          </span>
        </div>

        {/* Search Bar */}
        <div className={`border border-gray-200 rounded-md px-5 py-4 mb-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <input
            type='text'
            placeholder='Search...'
            value={filters.search}
            onChange={handleSearchChange}
            className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-indigo-500'
          />
        </div>

        {/* Category Filter */}
        <div className={`border border-gray-200 rounded-md px-5 py-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-md font-medium text-gray-800'>Categories</p>
          <div className='flex flex-col gap-3 text-sm'>
            {['Men', 'Women', 'Kids'].map(category => (
              <label key={category} className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={filters.categories.includes(category)}
                  onChange={() => handleFilterChange('categories', category)}
                  className='w-4 h-4 text-indigo-600 focus:ring-indigo-500'
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-200 rounded-md px-5 py-4 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-md font-medium text-gray-800'>Types</p>
          <div className='flex flex-col gap-3 text-sm'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
              <label key={type} className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={filters.types.includes(type)}
                  onChange={() => handleFilterChange('types', type)}
                  className='w-4 h-4 text-indigo-600 focus:ring-indigo-500'
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Listings Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            className='border-2 border-gray-300 text-sm px-2 focus:ring focus:ring-indigo-500'
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price: Low to High</option>
            <option value='high-low'>Sort by: Price: High to Low</option>
            <option value='alphabetical'>Sort by: Alphabetical</option>
          </select>
        </div>

        {/* Product Listings */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {loading ? (
            <div className='col-span-4 text-center'>Loading...</div>
          ) : (
            sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <div key={product._id} className='border rounded-md p-4 shadow-sm transition transform hover:scale-105'>
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className='w-full h-40 object-cover rounded-md mb-3'
                  />
                  <h3 className='font-medium text-md'>{product.name}</h3>
                  <p className='text-sm text-gray-500'>${product.price}</p>
                </div>
              ))
            ) : (
              <div className='col-span-4 text-center'>No products found.</div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
