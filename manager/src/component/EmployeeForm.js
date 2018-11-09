import React, {Component} from 'react';
import {Card,Input,CardSection,Button} from './common';
import{connect} from 'react-redux';
import {employeeUpdate,emploeeCreate} from '../Actions'
import {Picker,Text,View} from 'react-native';


class EmployeeForm extends Component{
    render() {
        return(
            <View>
                <CardSection>
                    <Input 
                     label="Name" 
                     placeHolder="employee name"
                     value={this.props.name}
                     onChangeText={text => this.props.employeeUpdate({prop:'name' , value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                     label="Phone"
                     placeHolder="employee phone number"
                     value={this.props.phone}
                     onChangeText={text => this.props.employeeUpdate({prop:'phone' , value: text})}
                    />
                </CardSection>

                <CardSection style={{flexDirection:'column',minHeight: 100}}>
                    <Text style={style.datepikerLabel}>Shift</Text>
                    <Picker
                     selectedValue={this.props.shift}
                     onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
                     style={{flex:1}}
                    >
                        <Picker.Item label="sunday" value="sunday"/>
                        <Picker.Item label="monday" value="monday"/>
                        <Picker.Item label="tuesday" value="tuesday"/>
                        <Picker.Item label="wedensday" value="wedensday"/>
                        <Picker.Item label="thursday" value="thursday"/>
                        <Picker.Item label="friday" value="friday"/>
                        <Picker.Item label="saturday" value="saturday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const style = {
    datepikerLabel:{
        fontSize: 18,
        paddingLeft:20,
    }
};

const mapStateToProps = (state) => {
    const{name,phone,shift} = state.employeeForm;

    return{name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);