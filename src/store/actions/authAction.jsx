import {CHANGE_TYPE, SOMETHING_ERROR, CHANGE_INPUT_EMAIL, CHANGE_INPUT_PASSWORD, RESET_INPUTS, GET_TOKEN} from "./types"
import axios from 'axios'
import {authToken} from '../../environment/environment'
export function changeType() {
    return {    
        type: CHANGE_TYPE
    }
}

export function submitButton(payload) {
    return async dispatch => {

        try {
            dispatch(getToken())
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authToken}`, payload)
            localStorage.setItem('token', response.data.idToken)
            
            dispatch(resetInputs())
        } catch (e) {
            dispatch(somethingError())
            console.log(e)
        }
    } 
}


export function changeInputEmail(payload) {
    // нет слов, одни эмоции......
    return {
        type: CHANGE_INPUT_EMAIL,
        payload
    }
}

export function changeInputPassword(payload) {
    return {
        type: CHANGE_INPUT_PASSWORD,
        payload
    }
}

function somethingError() {
    return {
        type: SOMETHING_ERROR
    }
}

function resetInputs() {
    return {
        type: RESET_INPUTS
    }
}

function getToken() {
    return {
        type: GET_TOKEN
    }
}