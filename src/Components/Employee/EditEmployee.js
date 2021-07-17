import React from 'react';
import { connect } from 'react-redux';
import { actionEditEmployee } from '../../actionCreators';
import EditEmployeeFunctioning from './EditEmployeeFunctioning';
const EditEmployee = (props) => {

    const onSubmit = (formValues) => {
        props.actionEditEmployee(props.match.params.id, formValues);
    }

    const objId = props.match.params.id;
    const obj = props.s.find(obj => obj.id == objId);
    var initialObject={};
    initialObject.employeeId=obj.employeeId;
    initialObject.employeeName=obj.employeeName;
    initialObject.employeeEmail=obj.employeeEmail;
    initialObject.employeePhone=obj.employeePhone;
    initialObject.employeeGender=obj.employeeGender;

    return (
        <EditEmployeeFunctioning initialValues={initialObject} onSubmit={onSubmit} />
    );
}


const mapStateToProps = (state) => {
    return { s: state.mainReducer.p };
}
export default connect(mapStateToProps, { actionEditEmployee })(EditEmployee);