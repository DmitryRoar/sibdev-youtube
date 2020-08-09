import { OPEN_MODAL, CLOSE_MODAL, FAVORITE_SEARCH_VALUE } from "./types";

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