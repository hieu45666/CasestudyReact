import { combineReducers } from "redux"
import { DataMedicine } from "./DataMedicine"
import { DataUser } from './DataUser'

export const rootReducer=combineReducers({
    DataMedicine,
    DataUser
})