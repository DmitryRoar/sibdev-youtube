import React from 'react'
import classes from './Search.module.scss'
import {useSelector} from 'react-redux'

export const SearchVideos = () => {
    const items = useSelector(state => ({
        data: state.home.data
    }))

    return (
        <div className={classes.GridContent} onClick={() => console.log(items.data)}>
            {items.data.map(item => {
                return (
                    <div className={classes.Card} key={item.id.videoId}>
                        <div className={classes.CardImg}>
                            <img src={item.snippet.thumbnails.medium.url} alt="name+id"/>
                            </div>
                
                            <div className={classes.CardTitle}>
                                {item.snippet.title}
                            </div>
                            <div className={classes.CardDescription}>
                                <p>{item.snippet.channelTitle}</p>
                                <small>просмотры типа</small>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}