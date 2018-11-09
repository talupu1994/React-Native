import React ,{Component} from 'react';
import {Card,CardSection,Button,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave,employeeDelete} from '../Actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

    state = {showModal: false}

    componentWillMount() {
        _.each(this.props.employee, (value,prop) => {
            this.props.employeeUpdate({prop,value});
        });
    }

    onButttonPress() {
        const {name,phone,shift} = this.props;
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid});
    }

    textemployee() {
        const {phone,shift} = this.props;
        Communications.text(phone,`your shift is on ${shift}`);
    }

    fireEmployee(){
        this.setState({showModal: !this.state.showModal});
    }

    onAccept(){
        this.props.employeeDelete({uid:this.props.employee.uid})
    }

    onDecline(){
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButttonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.textemployee.bind(this)}>
                        Text
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.fireEmployee.bind(this)}>
                        fire employee
                    </Button>
                </CardSection>
                <Confirm
                 visible={this.state.showModal}
                 onAccept={this.onAccept.bind(this)}
                 onDecline={this.onDecline.bind(this)}
                >
                    Are U sure?
                </Confirm>
            </Card>   
        );
    }
}

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;

    return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);