import {SUBMIT_CLICK_BUTTON, SEARCH_VALUE, TAKE_DATA, CLEAR_DATA, HORIZONTAL_GRID, VERTICAL_GRID, CLOSE_SUBMIT} from "./types"
import {ytbToken} from '../../environment/environment'
import axios from 'axios'

export function searchVideos(searchInput) {
    return async dispatch => {
        if (!searchInput) return
        try {
            dispatch(clearData())
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(searchInput)}&key=${ytbToken}`)
            dispatch(takeData(response.data.items))
        } catch (e) {
            console.log(e)
        }
    }
}

export function closeSubmit() {
    return {
        type: CLOSE_SUBMIT
    }
}

export function horizontalGrid() {
    return {
        type: HORIZONTAL_GRID
    }
}

export function verticalGrid() {
    return {
        type: VERTICAL_GRID
    }
}

export function clearData() {
    return {
        type: CLEAR_DATA
    }
}

export function submitButton() {
    return {
        type: SUBMIT_CLICK_BUTTON
    }
}

export function searchValue(payload) {
    return {
        type: SEARCH_VALUE,
        payload
    }
}

function takeData(payload) {
    return {
        type: TAKE_DATA,
        payload
    }
}