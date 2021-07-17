import React from 'react';
import { connect } from 'react-redux';
import { actionAddEmp } from '../../actionCreators';
import history from '../../history';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const AddEmployee = (props) => {
    const classes = useStyles();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Hello");
        var formValues={};
        const id=document.getElementById("id").value;
        formValues.employeeId=id;
        
        const name=document.getElementById("name").value;
        formValues.employeeName=name;
        
        const email=document.getElementById("email").value;
        formValues.employeeEmail=email;
        
        const phone=document.getElementById("phone").value;
        formValues.employeePhone=phone;
        
        const gender=document.getElementById("gender").value;
        formValues.employeeGender=gender;
console.log(formValues);
        props.actionAddEmp(formValues);
    }
    
    if (props.state.mainReducer.loginStatus === 'Success') {
        return (
            <div>
                <form  onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="Id"
                        name="id"
                        autoComplete="id"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="gender"
                        label="Gender"
                        name="gender"
                        autoComplete="gender"
                        autoFocus
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Add
                    </Button>
                </form>

            </div>
        );
    }
    else {
        return (
            <div>
                {history.push('./signin')}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { state: state }
}

export default connect(mapStateToProps, { actionAddEmp })(AddEmployee);