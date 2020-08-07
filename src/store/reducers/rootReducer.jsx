import {combineReducers} from "redux"
import {authReducer} from './authReducer'
import {homeReducer} from './homeReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer
})