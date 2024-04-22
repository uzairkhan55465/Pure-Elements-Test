import React, { useState } from 'react';
import Images from '../constant/Images';
import { useDispatch, useSelector } from 'react-redux';

const MoreProducts = () => {
  const selectedCategoryId = useSelector(state => state?.ShowData);
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { id: 1, image: Images.Category1, name: 'NEW IN - DEV' },
    { id: 2, image: Images.Category2, name: 'BODYSUITS - DEV' },
    { id: 3, image: Images.Category3, name: 'LEGGINGS - DEV' },
    { id: 4, image: Images.Category4, name: 'SHORTS - DEV' },
    { id: 5, image: Images.Category5, name: 'SPORTS BRA - DEV' }
  ];

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    console.log('Clicked category ID:', categories[index].id);
    dispatch({ type: 'UPDATE_SHOW_DATA', payload: categories[index].id });
  };


  console.log(selectedCategoryId, 'selectedCategoryId');

  return (
    <div className='mt-8 mb-8'>
      <div className="flex items-center justify-center  ps-6 pe-6">
        {categories.map((category, index) => (
          <div key={index} className='cursor-pointer ms-4 me-4 flex flex-col justify-center items-center' onClick={() => handleCategoryClick(index)}>
            <img className='w-[80px] rounded-[100px]' src={category.image} alt={`category${index + 1}`} />
            <p className={`text-[12px] font-[700] pt-2 ${activeCategory === index ? 'text-blue-500' : ''}`}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
