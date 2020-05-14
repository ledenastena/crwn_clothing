export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => (item.id === itemToAdd.id));
  
  if (existingItem) {
    return (
      cartItems.map(item => (
        (item.id === itemToAdd.id) ?
         {
          ...item,
          quantity: item.quantity + 1
        } :
         item
      ))
    );
  } 
  
    return ([
      ...cartItems,
      {
        ...itemToAdd,
        quantity: 1
      }
    ]);
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);
  
  if (existingItem) {
    if (existingItem.quantity > 1) {
      return cartItems.map((item) => 
        (item.id === existingItem.id) ?
          {
            ...item,
            quantity: item.quantity - 1
          } :
          item
        );
    }
    
    return cartItems.filter((item) => (item.id !== existingItem.id));
  }
  
  return cartItems;
} 