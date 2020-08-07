import React from 'react'
import classes from './Search.module.scss'
import {useSelector} from 'react-redux'

export const SearchResult = () => {
    const homeReducer = useSelector(state => ({
        searchValue: state.home.searchValue
    }))

    return (
        <div className={classes.SearchResultWrapper}>
            <div className={classes.SearchResultContent}>
                <p>Видео по запросу <strong>«{homeReducer.searchValue || 'empty'}»</strong></p>
                <small>кол-во результатов</small>
            </div>
            <div className={classes.ChangeGrid}>
                <button>
                    <i className="fas fa-list-ul" />
                    <i className="fas fa-th-large" />
                </button>
            </div>
        </div>
    )
}