import { SUBMIT_CLICK_BUTTON, SEARCH_VALUE, TAKE_DATA } from "../actions/types"

const initialState = {
    searchValue: '',
    submit: false,
    data: []
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VALUE:
            return {...state, searchValue: {...action.payload}}
        case SUBMIT_CLICK_BUTTON:
            return {...state, submit: true}
        case TAKE_DATA:
            return {...state, date: action.payload}
        default:
            return state
    }
}