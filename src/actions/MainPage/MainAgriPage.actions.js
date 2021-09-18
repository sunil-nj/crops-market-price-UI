import {
  GET_MARKET_PRICE
} from "./MainAgriPage.types.js";

//import TutorialDataService from "../services/tutorial.service";
import MainAgriService from "../../services/MainAgriService.js";

/*export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await TutorialDataService.create({ title, description });

    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};*/

export const getMarketPrice = (params) => async (dispatch) => {
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
};