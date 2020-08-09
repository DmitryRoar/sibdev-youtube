import { OPEN_MODAL, CLOSE_MODAL, FAVORITE_SEARCH_VALUE, OPEN_MAIN_MODAL, CLOSE_MAIN_MODAL } from "../actions/types"

const initialState = {
    searchValue: '',
    activeButton: false,
    openMainModal: false
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, activeButton: !state.activeButton}
        case CLOSE_MODAL:
            return {...state, activeButton: false}
        case FAVORITE_SEARCH_VALUE:
            return {...state, searchValue: action.payload} // пока не используется
        case OPEN_MAIN_MODAL:
            return {...state, openMainModal: true}
        case CLOSE_MAIN_MODAL:
            return {...state, openMainModal: false}
        default:
            return state
    }
}