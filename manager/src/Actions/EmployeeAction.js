import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_GET_SUCCESS,EMPLOYEE_SAVE_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop,value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop,value}
    };

};

export const emploeeCreate = ({name,phone,shift}) => {
    const currentUserID = firebase.auth().currentUser.uid;

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUserID}/employees`)
        .push({name,phone,shift})
        .then(() => {
            dispatch({type: EMPLOYEE_CREATE});
            Actions.pop();
        });
    };
};

export const getEmployee = () => {
    const currentUserID = firebase.auth().currentUser.uid;

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUserID}/employees`)
         .on('value' , snapshot => {
             dispatch({type:EMPLOYEE_GET_SUCCESS , payload: snapshot.val()});
         });
    };
};

export const employeeSave = ({name,phone,shift,uid}) => {
    const currentUserID = firebase.auth().currentUser.uid;

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUserID}/employees/${uid}`)
        .set({name,phone,shift})
        .then(() => {
            dispatch({type: EMPLOYEE_SAVE_SUCCESS})
            Actions.EmployeeList({type: 'reset'});
        });
    };
};

export const employeeDelete = ({uid}) => {
    const currentUserID = firebase.auth().currentUser.uid;

    return() => {
        firebase.database().ref(`/users/${currentUserID}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.EmployeeList({type: 'reset'});
        });
    };
};