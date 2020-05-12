import React from 'react';
import './checkout-page.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <span className='header-block'>
        Item
      </span>
      <span className='header-block'>
        Name
      </span>
      <span className='header-block'>
        Quantity
      </span>
      <span className='header-block'>
        Price
      </span>
      <span className='header-block'>
        Remove
      </span>
    </div>
      {
        cartItems.map(item => 
          <CheckoutItem key={item.id} cartItem={item} />)
      }
    <div className='total'>
      TOTAL ${ total }
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);