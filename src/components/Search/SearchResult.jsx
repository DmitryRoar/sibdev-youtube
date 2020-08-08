import React from 'react'
import classes from './Search.module.scss'
import {useSelector} from 'react-redux'
import {GridButton} from './GridButton'

export const SearchResult = () => {
    const homeReducer = useSelector(state => ({
        searchValue: state.home.searchValue,
        grid: state.home.gridHorizontal
    }))

    const clsGrid = [classes.ChangeGrid]

    return (
        <div className={classes.SearchResultWrapper}>
            <div className={classes.SearchResultContent}>
                <p>Видео по запросу <strong>«{homeReducer.searchValue || 'empty'}»</strong></p>
                <small>кол-во результатов</small>
            </div>
            <div className={clsGrid.join(' ')}>
                <GridButton />
            </div>
        </div>
    )
}