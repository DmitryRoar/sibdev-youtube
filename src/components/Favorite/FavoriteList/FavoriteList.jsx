import React from 'react'
import classes from './FavoriteList.module.scss'
import {Navbar} from '../../Navbar/Navbar'

export const FavoriteList = () => {
    const lists = JSON.parse(localStorage.getItem('favorite-list'))

    return (
        <>
        <Navbar/>
            <div className={classes.Favorite}>
                <div className={classes.Wrapper}>
                    <div className={classes.Favorite__Container}>
                        <h1 className={classes.Favorite__Container_Title}>Избранное</h1>

                        <div className={classes.ListWrapper}>
                            {lists 
                                ? lists.map(item => {
                                    return (
                                        <div className={classes.ListContent} key={Math.random()}>
                                            {item}
                                        </div>
                                    )
                                    })
                                : <div className={classes.ListContent}>
                                    EMPTY
                                  </div>
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}