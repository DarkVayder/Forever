import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdownIcon from '../assets/dropdown_icon.png';
import Title from '../components/Title';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState('relevant'); 
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [selectedTypes, setSelectedTypes] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [subCategory, setSubCategory] = useState([]);  
  const [selectedType, setSelecedType] = useState('');

  // Function to handle sorting the products
  const sortProducts = (products, order) => {
    if (order === 'low-high') {
      return [...products].sort((a, b) => a.price - b.price); 
    } else if (order === 'high-low') {
      return [...products].sort((a, b) => b.price - a.price); 
    }
    return products; 
  };

  // Function to handle filtering products by category, type (subCategory), and search query
  const filterProducts = (products) => {
    return products.filter(product => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.subCategory);
      const matchesSubCategory = subCategory.length === 0 || subCategory.includes(product.subCategory);
      const matchesSearchQuery = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesType && matchesSubCategory && matchesSearchQuery;
    });
  };

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category) 
        : [...prevCategories, category] 
    );
  };

  // Function to handle type (subCategory) selection
  const handleTypeChange = (type) => {
    setSelectedTypes(prevTypes =>
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type) 
        : [...prevTypes, type] 
    );
  };

  // Function to handle subcategory selection
  const handleSubCategoryChange = (subCat) => {
    setSubCategory(prevSubCategory =>
      prevSubCategory.includes(subCat)
        ? prevSubCategory.filter(s => s !== subCat)
        : [...prevSubCategory, subCat]
    );
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Apply both filters, search, and sorting
  const filteredProducts = filterProducts(products);
  const sortedProducts = sortProducts(filteredProducts, sortOrder);

  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t'>
      
      {/* Filters */}
      <div className='sm:min-w-60 w-full sm:w-1/4'>
        <p 
          className='my-4 text-xl flex items-center justify-between cursor-pointer border-b-2 border-gray-300 pb-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          <span className='font-semibold'>FILTERS</span>
          <img className={`h-3 sm:hidden transform ${showFilter ? 'rotate-90' : ''}`} src={dropdownIcon} alt='dropdown-icon'/>
          <span className='text-sm text-gray-500 sm:hidden'>
            {showFilter ? 'Hide' : 'Show'}
          </span>
        </p>

        {/* Search Bar */}
        <div className={`border border-gray-200 rounded-md px-5 py-4 mb-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
            className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm'
          />
        </div>
        
        {/* Filter options for categories */}
        <div className={`border border-gray-200 rounded-md px-5 py-4 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-md font-medium text-gray-800'>Categories</p>
          <div className='flex flex-col gap-3 text-sm text-gray-600'>
            <label className='flex items-center gap-2'>
              <input
                className='w-4 h-4' 
                type='checkbox' 
                value={'Men'}
                onChange={() => handleCategoryChange('Men')}
              /> 
              <span>Men</span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                className='w-4 h-4' 
                type='checkbox' 
                value={'Women'}
                onChange={() => handleCategoryChange('Women')}
              /> 
              <span>Women</span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                className='w-4 h-4' 
                type='checkbox' 
                value={'Kids'}
                onChange={() => handleCategoryChange('Kids')}
              /> 
              <span>Kids</span>
            </label>
          </div>
        </div>
        
        {/* SubFilter for Types (subCategory) */}
        <div className={`border border-gray-200 rounded-md px-5 py-4 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-md font-medium text-gray-800'>Type (Sub-Category)</p>
          <div className='flex flex-col gap-3 text-sm text-gray-600'>
            <label className='flex items-center gap-2'>
              <input
                className='w-4 h-4' 
                type='checkbox' 
                value={'Topwear'}
                onChange={() => handleTypeChange('Topwear')}
              /> 
              <span>Top-Wear</span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                className='w-4 h-4' 
                type='checkbox' 
                value={'Bottomwear'}
                onChange={() => handleTypeChange('Bottomwear')}
              /> 
              <span>Bottom-Wear</span>
            </label>
            <label className='flex items-center gap-2'>
              <input
                className='w-4 h-4' 
                type='checkbox' 
                value={'Winterwear'}
                onChange={() => handleTypeChange('Winterwear')}
              /> 
              <span>Winter-Wear</span>
            </label>
          </div>
        </div>

       
        {/* SubFilter for SubCategories based on selected Type */}
        {selectedType === 'Topwear' && (
          <div className={`border border-gray-200 rounded-md px-5 py-4 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-md font-medium text-gray-800'>Shirts and Trousers</p>
            <div className='flex flex-col gap-3 text-sm text-gray-600'>
              <label className='flex items-center gap-2'>
                <input
                  className='w-4 h-4'
                  type='checkbox'
                  value={'Shirts'}
                  onChange={() => handleSubCategoryChange('Shirts')}
                />
                <span>Shirts</span>
              </label>
              <label className='flex items-center gap-2'>
                <input
                  className='w-4 h-4'
                  type='checkbox'
                  value={'Trousers'}
                  onChange={() => handleSubCategoryChange('Trousers')}
                />
                <span>Trousers</span>
              </label>
            </div>
          </div>
        )}
        {selectedType === 'Bottomwear' && (
          <div className={`border border-gray-200 rounded-md px-5 py-4 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-md font-medium text-gray-800'>Pants and Jeans</p>
            <div className='flex flex-col gap-3 text-sm text-gray-600'>
              <label className='flex items-center gap-2'>
                <input
                  className='w-4 h-4'
                  type='checkbox'
                  value={'Pants'}
                  onChange={() => handleSubCategoryChange('Pants')}
                />
                <span>Pants</span>
              </label>
              <label className='flex items-center gap-2'>
                <input
                  className='w-4 h-4'
                  type='checkbox'
                  value={'Jeans'}
                  onChange={() => handleSubCategoryChange('Jeans')}
                />
                <span>Jeans</span>
              </label>
            </div>
          </div>
        )}
      </div>


      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          <select 
            className='border-2 border-gray-300 text-sm px-2' 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)} 
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

         {/* Product Listings */}
        <div className='flex-grow'>
          <p className='text-xl font-semibold mb-5'>Product Collection</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {sortedProducts && sortedProducts.map((product) => (
              <div key={product._id} className='border rounded-md p-4 shadow-sm'>
                <img src={product.image[0]} alt={product.name} className='w-full h-40 object-cover rounded-md mb-3'/>
                <h3 className='font-medium text-md'>{product.name}</h3>
                <p className='text-sm text-gray-500'>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
