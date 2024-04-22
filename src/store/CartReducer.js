const initialState = {
  ShowData: 0,
  showDrawer: false,
  cartItems: [] // New state to manage cart items
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SHOW_DATA':
      return {
        ...state,
        ShowData: action.payload,
      };
    case 'UPDATE_SHOW_DRAWER':
      return {
        ...state,
        showDrawer: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload] // Add the new product to cart
      };
    default:
      return state;
  }
};

export default CartReducer;
