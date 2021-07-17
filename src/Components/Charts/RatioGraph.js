import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { connect } from 'react-redux';
import history from '../../history';
import {actionMales,actionFemales } from '../../actionCreators';

const RatioGraph = (props) => {
    useEffect(() => {
      
        props.actionMales(m);
            props.actionFemales(f);
    }, []);
    if (props.state.mainReducer.loginStatus === "Success") {
        const p = props.state.mainReducer.p;
        if (p) {
            const data=props.state.mainReducer.p;
            var f=0;
            var m=0;
            data.map((employee,index)=>{
                if(employee.employeeGender==="Female"){
                    f++;
                }
                else{
                    m++;
                }
            });
            const finaldata=[
                {
                    name:"Males",
                    count:props.state.mainReducer.countMales
                },
                {
                    name:"Females",
                    count:props.state.mainReducer.countFemales
                }
            ]
            return (
                <Paper>
                    <Chart
                        data={finaldata}
                    >
                        <PieSeries
                        name="Aryan"
                            valueField="count"
                            argumentField="name"
                        />
                        <Title
                            text="Female to Male ratio"
                        />
                        <Animation />
                    </Chart>
                </Paper>
            );
        }
        else{
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
export default connect(mapStateToProps, { actionMales,actionFemales })(RatioGraph);