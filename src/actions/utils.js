import * as _ from 'lodash';

export const createActions = types => {
    const createAction = type => payload => {
        return {
            type:type,
            payload
        };
    };
    return _.mapValues(types, createAction);
};