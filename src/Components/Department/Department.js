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

const Department = (props) => {

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
                                    <TableCell align="right">Department Id</TableCell>
                                    <TableCell align="right">Department Name</TableCell>
                                    <TableCell align="right">Department Size</TableCell>
                                    <TableCell align="right">Actions</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {p.map((d) => (
                                    <TableRow key={d.id}>
                                        <TableCell component="th" scope="row">{d.id}</TableCell>
                                        <TableCell align="right">{d.departmentId}</TableCell>
                                        <TableCell align="right">{d.departmentName}</TableCell>
                                        <TableCell align="right">{d.departmentSize}</TableCell>
                                        <TableCell align="right">
                                            <Link to={`/editDepartment/${d.id}`}>Edit</Link><br />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <renderTable />
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
export default connect(mapStateToProps, { actionfetch })(Department);