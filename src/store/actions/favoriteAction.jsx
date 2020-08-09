import { OPEN_MODAL, CLOSE_MODAL, FAVORITE_SEARCH_VALUE, OPEN_MAIN_MODAL, CLOSE_MAIN_MODAL, CLEAR_MAIN_VALUE, ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, CHANGE_MODAL_OPEN, CHANGE_MODAL_CLOSE } from "./types";

export function openModal() {
    return {
        type: OPEN_MODAL
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function favoriteSearchValue(payload) {
    return {
        type: FAVORITE_SEARCH_VALUE,
        payload
    }
}

export function openMainModal() {
    return {
        type: OPEN_MAIN_MODAL
    }
}

export function closeMainModal() {
    return {
        type: CLOSE_MAIN_MODAL
    }
}

export function clearMainValue() {
    return {
        type: CLEAR_MAIN_VALUE
    }
}

export function addItem(payload) {
    return {
        type: ADD_ITEM,
        payload
    }
}

export function removeItem(payload) {
    return {
        type: REMOVE_ITEM,
        payload
    }
}

export function editItem(payload) {
    return {
        type: EDIT_ITEM,
        payload
    }
}

export function changeModalOpen() {
    return {
        type: CHANGE_MODAL_OPEN
    }
}

export function changeModalClose() {
    return {
        type: CHANGE_MODAL_CLOSE
    }
}