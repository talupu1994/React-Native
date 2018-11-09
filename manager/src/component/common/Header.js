//import lib
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {

    const { TextStyles, ViewStyle } = styles;

    return ( 
        <View style={ViewStyle}>
            <Text style={TextStyles}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    TextStyles: {
        fontSize: 20
    },
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    }
};

//make the visible to the app
export { Header };
