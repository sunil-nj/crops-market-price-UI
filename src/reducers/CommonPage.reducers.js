import {
  commonPageTypes
} from "../actions/Common";
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import { updateObject } from './utils.js';

/*const initialState = [];

function CommonPageReducer(commonPage = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PAGE_NAME:
      return [...commonPage, payload];

    default:
      return commonPage;
  }
};

export default CommonPageReducer;*/

export default Immutable({
    [commonPageTypes.SET_PAGE_NAME](state, action) {
        return updateObject(state, {pageName: action.payload});
    },
})


