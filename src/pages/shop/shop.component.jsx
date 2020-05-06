import React from 'react';
import SHOP_DATA from './shop-data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>
        <h1>This is the Shop page</h1>
        { this.state.collections.map(({id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage;