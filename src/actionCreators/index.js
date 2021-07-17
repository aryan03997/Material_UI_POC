import { StaticRouter } from 'react-router-dom';
import apis from '../apis';
import history from '../history';

export const actionLogin = () => (dispatch) =>{
    dispatch({ type: 'LOGIN' });
    history.push('/employee');
}

export  const actionLogout=()=>(dispatch)=>{
    dispatch({type:'LOGOUT'});
    history.push('/');
}

export const actionfetch= ()=>{
    return async(dispatch)=>{
        const response=await apis.get('/api/aryan/dummyData');
        if(response){
            dispatch({type:'FETCH',payload:response.data})
        }
    }
}

export const actionMales=(m)=>{
    return{
       type:"COUNT_MALES",
       payload:m
    }
}

export const actionFemales=(f)=>{
    return{
       type:"COUNT_FEMALES",
       payload:f
    }
}

export const actionAddEmp=(formValues)=>{
    return async(dispatch) => {
        const response1 = await apis.post('/api/aryan/dummyData',formValues);
        const response=await apis.get('/api/aryan/dummyData');
        if(response){
            dispatch({type:'ADD_EMP',payload:response.data});
            history.push('./employee');
        }
    }
}

export const actionAddDept=(formValues)=>{
    return async(dispatch) => {
        const response1 = await apis.post('/api/aryan/dummyData',formValues);
        const response=await apis.get('/api/aryan/dummyData');
        if(response){
            dispatch({type:'ADD_DEPT',payload:response.data});
            history.push('./department');
        }
    }
}

export const actionEditEmployee= (id,formValues) =>{
    return async(dispatch)=>{
        const response1=await apis.put(`/api/aryan/dummyData/${id}`,formValues);
        const response=await apis.get('/api/aryan/dummyData');
        dispatch({type:'EDIT_EMP',payload:response.data})
        history.push('/employee');
    }
}

export const actionEditDepartment= (id,formValues) =>{
    return async(dispatch)=>{
        const response1=await apis.put(`/api/aryan/dummyData/${id}`,formValues);
        const response=await apis.get('/api/aryan/dummyData');
        dispatch({type:'EDIT_DEPT',payload:response.data})
        history.push('/department');
    }
}