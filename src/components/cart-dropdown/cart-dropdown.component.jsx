import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ items, history, dispatch }) => (
  <div className='cart-dropdown'>
    { items.length ?
    <div className='cart-items'>
        { console.log(items)}
        {items.map( item => (
        <CartItem key={item.id} item={ item } />
      ))}
    </div>
    : <span className='empty-message'>Your cart is empty</span>
    }
    <CustomButton onClick={ () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
     } }>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
