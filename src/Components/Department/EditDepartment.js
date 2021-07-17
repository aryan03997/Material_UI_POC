import React from 'react';
import { connect } from 'react-redux';
import { actionEditDepartment } from '../../actionCreators';
import EditDepartmentFunctioning from './EditDepartmentFunctioning';
const EditDepartment = (props) => {

    const onSubmit = (formValues) => {
        props.actionEditDepartment(props.match.params.id, formValues);
    }

    const objId = props.match.params.id;
    const obj = props.s.find(obj => obj.id == objId);
    var initialObject={};
    initialObject.departmentId=obj.departmentId;
    initialObject.departmentName=obj.departmentName;
    initialObject.departmentSize=obj.departmentSize;

    return (
        <EditDepartmentFunctioning initialValues={initialObject} onSubmit={onSubmit} />
    );
}


const mapStateToProps = (state) => {
    return { s: state.mainReducer.p };
}
export default connect(mapStateToProps, { actionEditDepartment })(EditDepartment);