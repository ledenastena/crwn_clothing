import { createSelector } from 'reselect';

const selectCart = state => state.cart;

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