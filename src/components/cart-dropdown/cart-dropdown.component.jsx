import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

const CartDropdown = ({ items }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
        { console.log(items)}
        {items.map( item => (
        <CartItem key={item.id} item={ item } />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { items }}) => ({
  items: items
})

export default connect(mapStateToProps)(CartDropdown);
