import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.items
  );  
  
export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => (
    cartItems.reduce((accumulatedValue, currentItem) => (accumulatedValue + currentItem.quantity ), 0)
  )
);
      
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => (
    cartItems.reduce((accumulatedValue, currentItem) => (accumulatedValue + currentItem.quantity * currentItem.price ), 0)
  )
);