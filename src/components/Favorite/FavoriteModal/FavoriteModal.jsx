import React from 'react'
import classes from './FavoriteModal.module.scss'
import { FavoriteInput } from './FavoriteInput'
import {withRouter, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeSubmit, clearData } from '../../../store/actions/homeAction'
import { addItem, changeModalClose} from '../../../store/actions/favoriteAction'

const FavoriteModal = ({title, history}) => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => ({
        favoriteSearchValue: state.favorite.searchValue,
        data: state.favorite.data,
        changeModal: state.favorite.changeModal
    }))

    const submitHandler = event => {
        event.preventDefault()
        localStorage.setItem('favorite-item', JSON.stringify( [selectors.favoriteSearchValue] ))
        dispatch(addItem([selectors.favoriteSearchValue]))

        history.push('/')
        // dispatch(clearMainValue())
        dispatch(clearData())
        dispatch(closeSubmit())
    }

    const saveHandler = () => {
        dispatch(changeModalClose())
    }

    return (
        <div className={classes.FavoriteModal}>
            <div className={classes.Wrapper}>
                <div className={classes.ContentWrapper}>
                    <div className={classes.Content}>
                        <h3 className={classes.Title}>{title}</h3>

                        <form onSubmit={submitHandler} className={classes.Form}>
                            <FavoriteInput />

                            <div className={classes.Button}>
                                <button><Link to='/'>Не сохранять</Link></button>
                                <button type='submit' className={classes.Active} onClick={saveHandler}>Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(FavoriteModal)