import React, { useEffect } from 'react'
import classes from './FavoriteList.module.scss'
import { Navbar } from '../../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { FavoriteItem } from './FavoriteItem'
import { removeItem, editItem, changeModalOpen, changeModalClose, removePreviousItem } from '../../../store/actions/favoriteAction'

export const FavoriteList = () => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => ({
        data: state.favorite.data,
        searchValue: state.home.searchValue,
        search: state.favorite.searchValue
    }))

    useEffect(() => {
        const items = localStorage.getItem('favorite-item') || '[]'
        if (!selectors.data.length) {
            selectors.data.push(...JSON.parse(items))
        } else {
            localStorage.setItem('favorite-item', JSON.stringify(selectors.data))
        }
        dispatch(changeModalClose())
        // eslint-disable-next-line
    }, [])

    const removeHandler = (idx) => {
        dispatch(removeItem(idx))
        localStorage.setItem('favorite-item', JSON.stringify(selectors.data))
    }
   
    const changeHandler = (idx) => {
        dispatch(changeModalOpen()) 
        dispatch(editItem(idx))
        dispatch(removePreviousItem(idx))
    }

    return (
        <>
            <Navbar />
            <div className={classes.Favorite}>
                <div className={classes.Wrapper}>
                    <div className={classes.Favorite__Container}>
                        <h1 className={classes.Favorite__Container_Title}>Избранное</h1>

                        <div className={classes.ListWrapper}>
                            {selectors.data.length > 0
                                ? selectors.data.map((item, idx) => {
                                    
                                    return <FavoriteItem
                                        item={item}
                                        key={idx}
                                        removeHandler={removeHandler.bind(null, idx)}
                                        changeHandler={changeHandler.bind(null, idx)}
                                    />
                                })
                                : <div className={classes.ListContent}>
                                    <div className={classes.Text}>
                                        EMPTY
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}