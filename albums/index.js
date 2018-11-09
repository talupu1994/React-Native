/** @format */

//import { AppRegistry } from 'react-native';
//import App from './App';
//import { name as appName } from './app.json';

//AppRegistry.registerComponent(appName, () => App);
import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/header';
import AlbumeList from './src/components/AlbumeList';

const App = () => {
    return(
        <View style={{flex:1}}>
            <Header headerText = {'Albums!'}/>
            <AlbumeList/>
        </View>
    );
};

AppRegistry.registerComponent('albums' , () => App);
