import React, { useState } from 'react'
import classes from './FavoriteModal.module.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { favoriteSearchValue } from '../../../store/actions/favoriteAction'

export const FavoriteItem = () => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => ({
        homeSearchValue: state.home.searchValue,
        favoriteSearchValue: state.favorite.searchValue
    }))
    const [inputs, setInputs] = useState({
        inputRef: 1,
        searchValue: ''
    })
    const changeInputStateHandler = (event) => {
        setInputs(() => ({inputRef: event}))
    }
    const changeFavoriteValueHandler = (event) => {
        dispatch(favoriteSearchValue(event))
    }

    return (
        <>
            <div className={classes.Input}>
                <label htmlFor="text">Запрос</label>
                <input 
                type="text" 
                name="text" 
                readOnly 
                placeholder={selectors.homeSearchValue}
                />
            </div>
            <div className={classes.Input}>
                <label htmlFor="text" className={classes.InputName}>Название</label>
                <input 
                type="text" 
                name="text" 
                placeholder='Укажите название'
                required
                onChange={event => changeFavoriteValueHandler(event.target.value)}
                value={selectors.favoriteSearchValue}
                />
            </div>
            <div className={classes.InputSelect}>
                <label htmlFor="text">Сортировка по</label>
                <select>
                    <option>Без сортировки</option>
                    <option>api haven't this data</option>
                </select>
            </div>
            <div className={classes.InputRangeWrapper}>
                <div className={classes.InputRange}>
                    <label htmlFor="range">Максимальное Количество</label>
                    <input 
                    type="range" 
                    id='range'
                    min='0'
                    max='50'
                    defaultValue='0'
                    step='1'
                    onChange={event => changeInputStateHandler(event.target.value)}
                    />
                </div>
                <div className={classes.InputRangeCount}>
                    <span>{inputs.inputRef}</span>
                </div>
                </div>
        </>
    )
}