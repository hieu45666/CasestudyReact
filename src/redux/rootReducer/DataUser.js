import {SET_ROLE, LOG_OUT} from '../type/type'

const initialState = {
    username : "",
    role: "",
    birthday: "",
    email: "",
    name: "",
}

export const DataUser = (state = initialState, action) => {
    switch (action.type){
        case SET_ROLE:{
            return {...action.user}
        }
        case LOG_OUT:
            return initialState;
        default:
            return state;
    }
}