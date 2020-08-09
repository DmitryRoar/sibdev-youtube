import React from 'react'
import classes from './FavoriteList.module.scss'

export const FavoriteItem = ({item, removeHandler, changeHandler}) => {

    return (
        <div className={classes.ListContent}>
            <div className={classes.Text}>
                {item}
            </div>
            <div className={classes.ButtonWrapper}>
                <button type='button' className={classes.ChangeButton} onClick={changeHandler}>Изменить</button>
                <button type='button' className={classes.RemoveButton} onClick={removeHandler}>Удалить</button>
            </div>
        </div>
    )
}