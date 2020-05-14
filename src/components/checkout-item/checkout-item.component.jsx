import React from 'react'
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' src={ imageUrl } />
    </div>
    <span className='name'>{ name }</span>
    <span className='quantity'>
      <span className='arrow' onClick={ () => removeItem(cartItem) }>&#10094;</span>
      { quantity }
      <span className='arrow' onClick={ () => addItem(cartItem) }>&#10095;</span>
      </span>
    <span className='price'>${ price }</span>
    <div className='remove-button' onClick={ () => clearItem(cartItem) }>&#10005;</div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
