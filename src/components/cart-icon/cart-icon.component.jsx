import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{ itemCount }</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => (dispatch(toggleCartHidden()))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);