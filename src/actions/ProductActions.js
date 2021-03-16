export const PRODUCT_DETAIL_SELECTED_ITEM = "PRODUCT_DETAIL_SELECTED_ITEM";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const INITIALIZE_PRODUCT_ITEM_LIST = "INITIALIZE_PRODUCT_ITEM_LIST";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export function InitializeProductList(productData) {
  return {
    type: INITIALIZE_PRODUCT_ITEM_LIST,
    payload: productData,
  };
}

export function InitializeProductDetail(productData) {
  return {
    type: PRODUCT_DETAIL_SELECTED_ITEM,
    payload: productData,
  };
}

export function AddCartItems(productData) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: productData,
  };
}
export function RemoveCartItems(productData) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productData,
  };
}
