import { combineReducers } from "redux";
import mainAgriPageHandler from "./MainAgriPage.reducers.js";
import commonPageHandler from "./CommonPage.reducers.js";
import createAndWrapReducer from "./reducerFactory.js";

/*export default combineReducers({
  mainAgriPageReducer,
  commonPageReducer
});*/

const rootReducer = combineReducers({
    mainPage: createAndWrapReducer('mainPage', mainAgriPageHandler),
    commonPage: createAndWrapReducer('commonPage', commonPageHandler),
});

export default rootReducer;