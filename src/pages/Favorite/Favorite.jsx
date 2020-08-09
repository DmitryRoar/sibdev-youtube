import React from 'react'
import classes from './Favorite.module.scss'
import {Navbar}  from '../../components/Navbar/Navbar'

export const Favorite = () => {
    return (
        <>
            <Navbar/>
            
            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <div className={classes.Title}>Избранное</div>

                    <div className={classes.ListWrapper}>
                        <div className={classes.List}>
                            somethingList   
                        </div>
                        <div className={classes.List}>
                            somethingList   
                        </div>
                        <div className={classes.List}>
                            somethingList   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}