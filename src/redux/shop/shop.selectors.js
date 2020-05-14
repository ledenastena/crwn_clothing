import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionName => createSelector(
  [selectCollections],
  collections => collections[collectionName]
)