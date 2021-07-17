import React from 'react';
import { Field, reduxForm } from 'redux-form';
class EditDepartmentFunctioning extends React.Component {
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
                        <Field name="departmentId" label="Department Id" component={this.renderInput} />
                    </div>
                    <div className="ui two fields">
                        <Field name="departmentName" label="Department name" component={this.renderInput} />
                    </div>
                    <div>
                        <Field name="departmentSize" label="Department Size" component={this.renderInput} />
                    </div>
                    <button className="ui primary button">Submit</button>
                </form>
            </div>
        );

    }
}

export default reduxForm({
    form: "EditDepartmentForm",
})(EditDepartmentFunctioning);