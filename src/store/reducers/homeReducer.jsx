import { SUBMIT_CLICK_BUTTON, SEARCH_VALUE, TAKE_DATA, CLEAR_DATA, HORIZONTAL_GRID, VERTICAL_GRID, CLEAR_INPUT } from "../actions/types"

const initialState = {
    searchValue: '',
    submit: false,
    data: [],
    grid: true
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VALUE:
            return {...state, searchValue: action.payload}
        case SUBMIT_CLICK_BUTTON:
            return {...state, submit: true}
        case TAKE_DATA:
            return {...state, data: [...state.data, ...action.payload]}
        case CLEAR_DATA:
            return {...state, data: [], searchValue: '', grid: true}
        case CLEAR_INPUT:
            return {...state, submit: false}
        case HORIZONTAL_GRID: 
            return {...state, grid: true}
        case VERTICAL_GRID:
            return {...state, grid: false}
        default:
            return state
    }
}