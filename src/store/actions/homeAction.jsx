import { SUBMIT_CLICK_BUTTON, SEARCH_VALUE, TAKE_DATA } from "./types"
import {ytbToken} from '../../environment/environment'
import axios from 'axios'

export function searchVideos(searchInput) {
    return async dispatch => {
        if (!searchInput) return
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=13&q=${searchInput}&key=${ytbToken}`)
            console.log(response)
            dispatch(takeDate(response.data.items))
        } catch (e) {
            console.log(e)
        }
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

function takeDate(payload) {
    return {
        type: TAKE_DATA,
        payload
    }
}