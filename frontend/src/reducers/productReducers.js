export function productReducer(state = { product: [] }, action) {
  // Implement for product reducer

  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAILURE":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
