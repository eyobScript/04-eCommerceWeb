import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
} from "../constants/productConstants.js";

export function productListReducer(state = { products: [] }, action) {
  // Implement for product reducer

  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true ,products: []};
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export function productDetailsReducer(state = { product: { reviews: [] } }, action) {

  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true , ...state};
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
