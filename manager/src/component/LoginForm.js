import React,{Component} from 'react';
import {Card,Input,CardSection,Button,Spinner} from './common';
import {connect} from 'react-redux';
import {emailChange,passwordChanged,loginUser} from '../Actions';
import {View,Text} from 'react-native';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChange(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderError() { 
        if(this.props.error){
            return(
                <View style={{background:'white'}}>
                    <Text style={style.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderSpinnerOrButton() {
        if(this.props.loading){
            return(
                <Spinner size="large"/>
            );
        }
        else{
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                            Login
                </Button>
            );
        }
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label="Email" 
                    placeHolder="Your email"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    /> 
                </CardSection>
                <CardSection>
                    <Input 
                    isPassword label="Password"
                     placeHolder="Your password"
                     onChangeText={this.onPasswordChange.bind(this)}
                     value={this.props.password}
                     />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderSpinnerOrButton()}
                </CardSection>
            </Card>
        );
    }
}

const style = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps,{emailChange,passwordChanged,loginUser})(LoginForm);
