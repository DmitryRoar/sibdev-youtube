import React, {useRef} from 'react'
import classes from './Search.module.scss'
import {useDispatch} from 'react-redux'
import {submitButton, searchVideos, searchValue} from '../../store/actions/homeAction'

export const SearchInput = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const submitHandler = (event) => {
        event.preventDefault()
        const value = inputRef.current.value
        if (!value.trim()) return 

        dispatch(submitButton())
        dispatch(searchVideos(value))
        dispatch(searchValue(value))
    }


    return (
        <form className={classes.Form} onSubmit={submitHandler}>
            <div className={classes.Input}>
                <input type="text" placeholder='Что хотите посмотреть?' ref={inputRef} />
                <button type='button'>
                <i className="far fa-heart" />
                </button>
            </div>
            <button type='submit' className={classes.SubmitBtn}>Найти</button>
        </form>
    )
}