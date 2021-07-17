import React, { useEffect } from 'react';
import Drawer from '../Drawer';
import { connect } from 'react-redux';
import { actionfetch } from '../../actionCreators';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import history from '../../history';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Employee = (props) => {

    const classes = useStyles();

    useEffect(() => {
        props.actionfetch()
    }, []);

    const p = props.state.mainReducer.p;
    if (props.state.mainReducer.loginStatus === "Success") {
        if (p) {
            return (
                <div>
                    <Drawer /><br />
                    <h1>Employee Details</h1>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No.</TableCell>
                                    <TableCell align="right">Employee Id</TableCell>
                                    <TableCell align="right">Employee Name</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Employee Email</TableCell>
                                    <TableCell align="right">Employee Phone Number</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {p.map((d) => (
                                    <TableRow key={d.id}>
                                        <TableCell component="th" scope="row">{d.id}</TableCell>
                                        <TableCell align="right">{d.employeeId}</TableCell>
                                        <TableCell align="right">{d.employeeName}</TableCell>
                                        <TableCell align="right">{d.employeeGender}</TableCell>
                                        <TableCell align="right">{d.employeeEmail}</TableCell>
                                        <TableCell align="right">{d.employeePhone}</TableCell>
                                        <TableCell align="right">
                                            <Link to={`/editEmployee/${d.id}`}>Edit</Link><br />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
        }

        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
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
    return {
        state: state
    };
}
export default connect(mapStateToProps, { actionfetch })(Employee);