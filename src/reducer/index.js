import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const initialState = {
    id: "aryan03997@gmail.com",
    pass: "123",
    loginStatus:"Fail",
    countFemales:0,
    countMales:0
}

const mainReducer = (state=initialState,action) => {
    if(action.type==="LOGIN"){
        return{
            ...state,
            loginStatus:"Success"
        }
    }
    if(action.type==="FETCH"){
        const p=action.payload;
        return{
            ...state,
            p
        }
    }
    if(action.type==="LOGOUT"){
        return{
            ...state,
            loginStatus:"Fail"
        }
    }
    if(action.type==="COUNT_MALES"){
        return{
            ...state,
            countMales:action.payload
        }
    }
    if(action.type==="COUNT_FEMALES"){
        return{
            ...state,
            countFemales:action.payload
        }
    }
    if(action.type==="ADD_EMP"){
        const p=action.payload;
        return{
            ...state,
            p
        }
    }
    if(action.type==="ADD_DEPT"){
        const p=action.payload;
        return{
            ...state,
            p
        }
    }
    if(action.type==='EDIT_EMP'){
        const p = action.payload;
        return {
            ...state,
            p
        };
    }
    if(action.type==='EDIT_DEPT'){
        const p = action.payload;
        return {
            ...state,
            p
        };
    }
    return state;
}

export default combineReducers({
    form:formReducer,
    mainReducer
});