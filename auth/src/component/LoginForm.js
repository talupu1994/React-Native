import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', err: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ err: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({
            err: 'auth fail',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            err: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        } else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                     placeHolder='Your Email'
                     label='Email'
                     value={this.state.email}
                     onChangeText={text => this.setState({ email: text })}
                     isPassword={false}
                    />
                </CardSection>

                <CardSection >
                    <Input
                     placeHolder='Your password'
                     label='Password' 
                     value={this.state.password}
                     onChangeText={text => this.setState({ password: text })}
                     isPassword /*={true} */
                    />
                </CardSection>

                <Text style={style.errStyle}>
                    {this.state.err}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const style = {
    errStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


export default LoginForm;
