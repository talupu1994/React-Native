import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    state = { logedin: null }
    componentWillMount() {
        //firebase init
        firebase.initializeApp({
            apiKey: 'AIzaSyB0cw_LbpdpMVoy0V_PpvgWp6H89bD3Nm0',
            authDomain: 'auth-a2d6b.firebaseapp.com',
            databaseURL: 'https://auth-a2d6b.firebaseio.com',
            projectId: 'auth-a2d6b',
            storageBucket: 'auth-a2d6b.appspot.com',
            messagingSenderId: '337305664233'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ logedin: true });
            } else {
                this.setState({ logedin: false });
            }
        });
    }

    renderForm() {
        switch (this.state.logedin) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                return (
                    <View style={style.spinnerWrapperStyle}>
                        <Spinner size='large' />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Auth App" />
                {this.renderForm()}
            </View>
        );
    }
}

const style = {
    spinnerWrapperStyle: {
        alignSelf: 'center',
    }
};

export default App;
