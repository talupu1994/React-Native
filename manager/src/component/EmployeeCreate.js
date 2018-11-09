import React, {Component} from 'react';
import {Card,CardSection,Button} from './common';
import{connect} from 'react-redux';
import {employeeUpdate,emploeeCreate} from '../Actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component{
    onBTNPress() {
        const {name , phone , shift} = this.props;

        this.props.emploeeCreate({name,phone,shift: shift || 'sunday'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onBTNPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}



const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;

    return {name , phone ,shift};
};

export default connect(mapStateToProps,{employeeUpdate,emploeeCreate})(EmployeeCreate);