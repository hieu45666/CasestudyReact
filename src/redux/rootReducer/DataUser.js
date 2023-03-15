import {SET_ROLE} from '../type/type'

const initialState = {
    username : "",
    role: "",
    birthday: "",
    email: ""
}

export const DataUser = (state = initialState, action) => {
    switch (action.type){
        case SET_ROLE:{
            return {...action.user}
        }
        default:
            return state;
    }
}