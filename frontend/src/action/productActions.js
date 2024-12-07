import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProduct = async (dispatch) => {
  try {
    dispatch({ typ: PRODUCT_LIST_REQUEST });

    const { data } = await axios.request("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.massage
          ? error.response.data.massage
          : error.response,
    });
  }
};
