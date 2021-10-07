import * as _ from 'lodash';
import Immutable from 'seamless-immutable';

const initialState = {mainPage: [],commonPage:{pageName: "My App Name"}};

function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

export default function createAndWrapReducer(slice, handlers){
    return createReducer(_.get(Immutable(initialState), slice), handlers);
}