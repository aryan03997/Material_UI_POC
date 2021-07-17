import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { connect } from 'react-redux';
import history from '../../history';



const Department = (props) => {
  if (props.state.mainReducer.loginStatus === "Success") {
    const p = props.state.mainReducer.p;
    if (p) {
      const data = props.state.mainReducer.p;
      var finaldata=[];
      data.map((employee, index) => {
        var obj={
          departmentName:employee.departmentName,
          departmentSize:employee.departmentSize
        }
        finaldata.push(obj);
      });
      return (
        <Paper>
          <Chart
            data={finaldata}
          >
            <ArgumentAxis />
            <ValueAxis max={7} />

            <BarSeries
              valueField="departmentSize"
              argumentField="departmentName"
            />
            <Title text="Employees" />
            <Animation />
          </Chart>
        </Paper>
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

export default connect(mapStateToProps)(Department);
