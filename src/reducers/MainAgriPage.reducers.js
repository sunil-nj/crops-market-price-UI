import {
  GET_MARKET_PRICE
} from "../actions/MainPage/MainAgriPage.types.js";

const initialState = [];

function MainAgriPageReducer(mainAgriPage = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MARKET_PRICE:
      return [...mainAgriPage, payload];

    /*case RETRIEVE_TUTORIALS:
      return payload;*/

    default:
      return mainAgriPage;
  }
};

export default MainAgriPageReducer;