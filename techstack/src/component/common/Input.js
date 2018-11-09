import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, isPassword }) => {
    const { InputStyle, LabelStyle, InputContainerStyle } = style;
    return (
        <View style={InputContainerStyle}>
            <Text style={LabelStyle}>{label}</Text>
            <TextInput
             secureTextEntry={isPassword}
             placeholder={placeHolder}
             autoCorrect={false}
             style={InputStyle}
             value={value}
             onChangeText={onChangeText}
            />
        </View>
    );
};

const style = {
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3, //my change from 2 to 3
        //my add
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    LabelStyle: {
        fontSize: 19,
        paddingLeft: 20,
        flex: 2
    },
    InputContainerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        //my add
        alignContent: 'space-around',
        paddingRight: 20
    }
};

export { Input };
