import {CHANGE_TYPE, SOMETHING_ERROR, CHANGE_INPUT_PASSWORD, CHANGE_INPUT_EMAIL, SUBMIT_BUTTON, RESET_INPUTS} from "../actions/types"

const intialState = {
    email: '',
    password: '',
    error: false,
    passwordType: true,
    submit: false
}

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_EMAIL: 
            return {...state, email: action.payload, error: false}
        case CHANGE_INPUT_PASSWORD: 
            return {...state, password: action.payload, error: false}
        case SUBMIT_BUTTON:
            return {...state}
        case CHANGE_TYPE: 
            return {...state, passwordType: !state.passwordType}
        case SOMETHING_ERROR:
            return {...state, error: true, email: '', password: ''}
        case RESET_INPUTS: 
            return {...state, email: '', password: '', error: false}
        default:
            return state
    }
}