import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" titleStyle={{textAlign: 'center',flex: 1}} initial/>
                </Scene>
                <Scene key="main">
                    <Scene key="EmployeeList" 
                    component={EmployeeList} 
                    title="Employees" 
                    titleStyle={{textAlign:'center',flex:1}} 
                    rightTitle="Add" 
                    onRight={() => { Actions.employeeCreate()}}
                    initial />

                    <Scene key="employeeCreate" 
                    title="Create Employee" 
                    component={EmployeeCreate}/>

                    <Scene key="employeeEdit"
                     component={EmployeeEdit}
                     title="edit"
                    />

                    
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;