import React from 'react';
import Drawer from './Drawer';
import RatioGraph from './Charts/RatioGraph';
import Department from './Charts/Departments';
const Dashboard=()=>{
    return(
        <div>
            <Drawer/><br/>
           <div> <RatioGraph/></div><br/>
           <div> <Department/></div>
        </div>
    );
}

export default Dashboard;