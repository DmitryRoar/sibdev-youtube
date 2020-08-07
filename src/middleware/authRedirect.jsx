import React from 'react'
import { GET_TOKEN } from "../store/actions/types"
import {Redirect} from 'react-router-dom'

export function authRedirectMiddleware() {
    return function(next) {
        return function(action) {
            if (action.type === GET_TOKEN) {
                return <Redirect to='/' />
            } 

            return next(action)
        }
    }
}