import React from 'react';
import { Field, reduxForm } from 'redux-form';
class EditEmployeeFunctioning extends React.Component {
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'ui error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }
    renderError = (meta) => {
        if (meta.error && meta.touched) {
            return (
                <div className="ui red message">{meta.error}</div>
            );
        }
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <div className="ui container">
                <form className="ui form segment" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="ui two fields">
                        <Field name="employeeId" label="Employee Id" component={this.renderInput} />
                    </div>
                    <div className="ui two fields">
                        <Field name="employeeName" label="Employee name" component={this.renderInput} />
                    </div>
                    <div>
                        <Field name="employeeEmail" label="Employee Email" component={this.renderInput} />
                    </div>
                    <Field name="employeePhone" label="Employee Phone" component={this.renderInput} />
                    <div>
                        <Field name="employeeGender" label="Employee Gender" component={this.renderInput} />
                    </div>
                    <button className="ui primary button">Submit</button>
                </form>
            </div>
        );

    }
}

export default reduxForm({
    form: "EditEmployeeForm",
})(EditEmployeeFunctioning);