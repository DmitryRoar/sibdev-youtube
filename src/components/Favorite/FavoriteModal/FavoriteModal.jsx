import React from 'react'
import classes from './FavoriteModal.module.scss'
import { FavoriteItem } from './FavoriteInput'
import {withRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeSubmit, clearData } from '../../../store/actions/homeAction'

const FavoriteModal = ({title, history}) => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => ({
        favoriteSearchValue: state.favorite.searchValue 
    }))

    const submitHandler = event => {
        event.preventDefault()
        
        const localVals = JSON.parse(localStorage.getItem('favorite-list')) || [];
        localStorage.setItem('favorite-list', JSON.stringify( [...localVals, selectors.favoriteSearchValue] ))

        history.push('/')
        dispatch(clearData())
        dispatch(closeSubmit())
    }

    const redirectHandler = () => {
        history.push('/')
        dispatch(closeSubmit())
    }

    return (
        <div className={classes.FavoriteModal}>
            <div className={classes.Wrapper}>
                <div className={classes.ContentWrapper}>
                    <div className={classes.Content}>
                        <h3 className={classes.Title}>{title}</h3>

                        <form onSubmit={submitHandler} className={classes.Form}>
                            <FavoriteItem />

                            <div className={classes.Button}>
                                <button type='button' onClick={redirectHandler}>Не сохранять</button>
                                <button type='submit' className={classes.Active}>Сохарнить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(FavoriteModal)