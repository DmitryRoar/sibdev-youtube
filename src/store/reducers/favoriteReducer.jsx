import { OPEN_MODAL, CLOSE_MODAL, FAVORITE_SEARCH_VALUE, OPEN_MAIN_MODAL, CLOSE_MAIN_MODAL, CLEAR_MAIN_VALUE, ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, CHANGE_MODAL_CLOSE, CHANGE_MODAL_OPEN, REMOVE_PREVIOUS_ITEM
 } from "../actions/types"

const initialState = {
    searchValue: '',
    activeButton: false,
    openMainModal: false,
    data: [],
    changeModal: false
}

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, searchValue: '', activeButton: !state.activeButton}
        case CLOSE_MODAL:
            return {...state, activeButton: false}
        case FAVORITE_SEARCH_VALUE:
            return {...state, searchValue: action.payload} 
        case OPEN_MAIN_MODAL:
            return {...state, openMainModal: true}
        case CLOSE_MAIN_MODAL:
            return {...state, openMainModal: false}
        case CLEAR_MAIN_VALUE:
            return {...state, searchValue: ''}
        case ADD_ITEM:
            return {...state, data: [...state.data, ...action.payload]}
        case REMOVE_ITEM:
            state.data.splice(action.payload, 1)
            return {...state, data: state.data}
        case EDIT_ITEM:
            return {...state, openMainModal: true, searchValue: state.data[action.payload]}
        case REMOVE_PREVIOUS_ITEM:
            state.data.splice(action.payload, 1)
            return {...state, data: state.data}
        case CHANGE_MODAL_OPEN:
            return {...state, changeModal: true}
        case CHANGE_MODAL_CLOSE:
            return {...state, changeModal: false}
        default:
            return state
    }
}