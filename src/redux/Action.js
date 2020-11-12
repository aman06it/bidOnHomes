import * as Action from './actionType';

export const login = (data)=> dispatch =>{
    dispatch({
        type: Action.USER_LOGIN,
        data:data,
    });
}
export const addData = (data)=> dispatch =>{
    dispatch({
        type: Action.ADD_DATA,
        data:data,
    });
}
export const logout = ()=> dispatch =>{
    dispatch({
        type: Action.LOGOUT,
    });
}