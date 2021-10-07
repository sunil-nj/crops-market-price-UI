import _ from 'lodash';

export function updateObject(oldObject, newValues){
    return _.merge({}, oldObject, newValues);
}