import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './component/LoginForm';
import Router from './Router';

class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAbz816yMiz2s5C36vL4c3lt-2VTOPwCK8',
            authDomain: 'managerapp-21bc6.firebaseapp.com',
            databaseURL: 'https://managerapp-21bc6.firebaseio.com',
            projectId: 'managerapp-21bc6',
            storageBucket: 'managerapp-21bc6.appspot.com',
            messagingSenderId: '914291160221'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
               <Router/>
            </Provider>
        );
    }
}

export default App;