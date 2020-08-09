import React, {useEffect} from 'react'
import classes from './Favorite.module.scss'
import {Navbar}  from '../../components/Navbar/Navbar'
import {useDispatch} from 'react-redux'
import { closeModal } from '../../store/actions/favoriteAction'

export const Favorite = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeModal())
    }, [])

    return (
        <>
            <Navbar/>

            <div className={classes.Favorite}>
                <div className={classes.Wrapper}>
                    <div className={classes.Favorite__Container}>
                        <h1 className={classes.Favorite__Container_Title}>Избранное</h1>

                        <div className={classes.ListWrapper}>
                            <div className={classes.ListContent}>
                                somethingList
                            </div>
                            <div className={classes.ListContent}>
                                somethingList
                            </div>
                            <div className={classes.ListContent}>
                                somethingList
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}