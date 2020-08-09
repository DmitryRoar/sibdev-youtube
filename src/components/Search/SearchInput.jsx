import React, {useRef} from 'react'
import classes from './Search.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {submitButton, searchVideos, searchValue} from '../../store/actions/homeAction'
import {openModal} from '../../store/actions/favoriteAction'
import FavoriteAlert from '../Favorite/FavoriteAlert/FavoriteAlert'

export const SearchInput = () => {
    const dispatch = useDispatch()
    const favoriteReducer = useSelector(state => ({
        activeButton: state.favorite.activeButton
    }))
    const inputRef = useRef(null)

    const submitHandler = (event) => {
        event.preventDefault()
        const value = inputRef.current.value
        if (!value.trim()) return 

        dispatch(submitButton())
        dispatch(searchVideos(value))
        dispatch(searchValue(value))
    }


    const changeHeartHandler = () => {
        dispatch(openModal())
    }


    return (
        <>
            <form className={classes.Form} onSubmit={submitHandler}>
                <div className={classes.Input}>
                    <input type="text" placeholder='Что хотите посмотреть?' ref={inputRef} />
                    <button type='button' onClick={changeHeartHandler}>
                        {   !favoriteReducer.activeButton 
                            ? <i className="far fa-heart" />
                            : <img src='./assets/img/heartActive.svg' alt='heart active'/>
                        }
                    </button>
                </div>
                <button type='submit' className={classes.SubmitBtn}>Найти</button>
            </form>

            {
                favoriteReducer.activeButton 
                &&
                <FavoriteAlert />
            }
        </>
    )
}