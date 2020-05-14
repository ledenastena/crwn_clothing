import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utilities';

const INITIAL_STATE = {
  hidden: true,
  items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN : 
      return {
        ...state,
        hidden: !state.hidden
      };
      case CartActionTypes.ADD_ITEM_TO_CART :
        return {
          ...state,
          items: addItemToCart(state.items, action.payload)
        };
      case CartActionTypes.CLEAR_ITEM_FROM_CART :
        return {
          ...state,
          items: state.items.filter( item => item.id !== action.payload.id)
        };
        case CartActionTypes.REMOVE_ITEM_FROM_CART :
          return {
            ...state,
            items: removeItemFromCart(state.items, action.payload)
          }
    default: 
      return state;
  }
}

export default cartReducer;