import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER_START} from '../Actions/types';
const INIT_STATE = {email : '', password: '',user: null,error:'',loading:false};

export default (state = INIT_STATE,action) => {
    switch(action.type){
        default:
            return state;
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, user:action.payload,error:'',loading:false,email:'',password:''};
        case LOGIN_USER_FAIL:
            return {...state,error:'auth fail',loading:false};
        case LOGIN_USER_START:
            return {...state,loading:true,error:''};
    }
};