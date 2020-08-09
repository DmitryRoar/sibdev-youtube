import React from 'react'
import classes from './Search.module.scss'
import {useSelector} from 'react-redux'

export const SearchVideos = () => {
    const items = useSelector(state => ({
        data: state.home.data,
        grid: state.home.grid
    }))

    const cls = [classes.GridContent]
    if (!items.grid) {
        cls.push(classes.VerticalGrid)
    } 

    return (
        <div className={cls.join(' ')}>
            {items.data.map(item => {
                return (
                    <div className={classes.Card} key={Math.random()}>
                        <div className={classes.CardImg}>
                            <img src={item.snippet.thumbnails.medium.url} alt="name+id"/>
                            </div>
                
                        <div className={classes.CardDescriptionWrapper}>
                            <div className={classes.CardTitle}>
                                {item.snippet.title}
                            </div>
                            <div className={classes.CardDescription}>
                                <p>{item.snippet.channelTitle}</p>
                                <small>0 просмотров</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}