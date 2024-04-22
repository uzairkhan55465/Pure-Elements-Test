// ProductsSlice.js

const initialState = {
    selectedCategoryId: null
  };
  
  const ProductsSlice = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_DATA':
        return {
          ...state,
          selectedCategoryId: action.payload
        };
      default:
        return state;
    }
  };
  
  export default ProductsSlice;
  