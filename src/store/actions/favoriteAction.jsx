import { OPEN_MODAL, CLOSE_MODAL, FAVORITE_SEARCH_VALUE, OPEN_MAIN_MODAL, CLOSE_MAIN_MODAL } from "./types";

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