import React, {useRef} from 'react'
import classes from './SearchInput.module.scss'
import {useDispatch} from 'react-redux'
import {searchValue} from '../../store/actions/homeAction'

export const SearchInput = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const changeHandler = () => {
        dispatch(searchValue(inputRef.current.value.trim()))
    }

    return (
        <div className={classes.Input}>
            <input type="text" placeholder='Что хотите посмотреть?' ref={inputRef} onChange={changeHandler}/>
            <button type='button'>
            <i className="far fa-heart"></i>
            </button>
        </div>
    )
}