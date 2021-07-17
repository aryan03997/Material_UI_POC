import React from 'react';
import SignIn from './SignIn';
import Department from './Department/Department';
import Employee from './Employee/Employee';
import { Router, Route, Switch } from 'react-router-dom';
import  history  from '../history';
import Dashboard from './Dashboard';
import Drawer from './Drawer';
import FirstPage from './FirstPage';
import AddEmployee from './Employee/AddEmployee';
import AddDepartment from './Department/AddDepartment';
import EditEmployee from './Employee/EditEmployee';
import EditDepartment from './Department/EditDepartment';

export default function App() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={FirstPage}/>
                    <Route exact path="/drawer" component={Drawer}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/department" component={Department}/>
                    <Route exact path="/employee" component={Employee}/>
                    <Route exact path="/addEmployee" component={AddEmployee}/>
                    <Route exact path='/editEmployee/:id' component={EditEmployee} />
                    <Route exact path='/editDepartment/:id' component={EditDepartment} />

                    <Route exact path="/addDepartment" component={AddDepartment}/>
                </Switch>
            </Router>
        </div>
    );
}

