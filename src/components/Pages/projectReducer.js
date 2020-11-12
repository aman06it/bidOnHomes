import * as Action from '../../redux/actionType'

const initialState = {
    login:false,
    data:[],
    userData:{}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Action.USER_LOGIN:
            return {
                ...state,
                login: true,
                userData:action.data
            }
        case Action.ADD_DATA:
            return {
                ...state,
                data: [...state.data,action.data],
            }
        case Action.LOGOUT:
            return {
                ...state,
                data: [],
                login:false,
                userData:{}
            }
        default:
            return state;
    }

}