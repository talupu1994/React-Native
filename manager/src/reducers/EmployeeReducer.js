import {EMPLOYEE_GET_SUCCESS} from '../Actions/types';

const INIT_STATE = {};

export default (state = INIT_STATE,action) => {
    switch(action.type){
        case EMPLOYEE_GET_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};