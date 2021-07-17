import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {actionAddDept} from '../../actionCreators';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const AddDepartment = (props) => {
    const classes = useStyles();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Hello");
        var formValues={};
        const id=document.getElementById("id").value;
        formValues.departmentId=id;
        
        const name=document.getElementById("name").value;
        formValues.departmentName=name;
        
        const size=document.getElementById("size").value;
        formValues.departmentSize=size;
        
        props.actionAddDept(formValues);
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
                        label="Department Id"
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
                        label="Department Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="size"
                        label="Department Size"
                        name="size"
                        autoComplete="size"
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

export default connect(mapStateToProps, { actionAddDept })(AddDepartment);