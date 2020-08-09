import {combineReducers} from "redux"
import {authReducer} from './authReducer'
import {homeReducer} from './homeReducer'
import {favoriteReducer} from "./favoriteReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer,
    favorite: favoriteReducer
})