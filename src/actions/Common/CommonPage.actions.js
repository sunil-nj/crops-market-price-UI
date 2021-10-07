/*import {
  SET_PAGE_NAME
} from "./CommonPage.types.js";*/
import * as commonType from "./CommonPage.types.js";
import { createActions } from "../utils.js";
/*export const getMarketPrice = (params) => async (dispatch) => {
    try {
    const res = await MainAgriService.getMarketPrice(params);
    dispatch({
        type: GET_MARKET_PRICE,
        payload: res.data
    });
    return Promise.resolve(res.data);
    } catch(err) {
        return Promise.reject(err);
    }
};*/

const commonAction = createActions(commonType);

export const setPageName = (data) => (dispatch) => {
    dispatch(commonAction.SET_PAGE_NAME(data));
};