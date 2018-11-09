import React,{Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {getEmployee} from '../Actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component{

    componentWillMount() {
        this.props.getEmployee();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.datasource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        console.log(this.props);
        return(
            <ListView
             enableEmptySections
             dataSource={this.datasource}
             renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val,uid) =>   {
        return {...val,uid};
    });

    return {employees};
};

export default connect(mapStateToProps,{getEmployee})(EmployeeList);
