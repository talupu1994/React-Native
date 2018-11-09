import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {Header} from './component/common';
import LibraryList from './component/LibraryList';

class App extends Component{
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex:1 }}>
                    <Header headerText="tech stack"/>
                    <LibraryList/>
                </View> 
            </Provider>
        );
    }
}

export default App;