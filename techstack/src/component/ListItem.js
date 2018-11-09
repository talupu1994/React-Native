import React,{Component} from 'react';
import {CardSection} from './common';
import {View,
    Text,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../action';

class ListItem extends Component{
    
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        if(this.props.expended){
            return (
                <CardSection>
                    <Text style={{flex:1}}>{this.props.library.item.description}</Text>
                </CardSection>
            );      
        }
    }

    render() {
        const {titleStyle} = style;
        //details that come out from parent
        const {id,title} = this.props.library.item; 

        return(
            <TouchableWithoutFeedback
             onPress = {() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            { title }
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    const expended = state.selectedLibraryID === ownProps.library.item.id;
    return{expended};
};

const style = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

export default connect(mapStateToProps,actions)(ListItem);
