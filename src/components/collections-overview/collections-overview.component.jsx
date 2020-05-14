import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    { collections.map(({id, ...otherProps}) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionsOverview);