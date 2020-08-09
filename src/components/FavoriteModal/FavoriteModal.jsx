import React from 'react'
import classes from './FavoriteModal.module.scss'
import {Link} from 'react-router-dom'

export const FavoriteModal = () => {
    const modalWindowOpen = () => {
        console.log('test')
    }

    return (
        <div className={classes.FavoriteModal}>
            <div className={classes.Wrapper}>
                <div className={classes.ContentWrapper}>
                    <div className={classes.Arrow}>
                        <i className={classes.ArrowUp} />
                    </div>
                    <div className={classes.Content}>
                        <h3>Поиск сохранён в разделе «Избранное»</h3>
                        <div className={classes.Redirect}>
                            <Link to='/favorite' onClick={modalWindowOpen}>Перейти в избранное</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}