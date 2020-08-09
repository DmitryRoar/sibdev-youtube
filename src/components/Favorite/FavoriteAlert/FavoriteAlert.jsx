import React from 'react'
import classes from './FavoriteAlert.module.scss'
import {Link, withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {openMainModal} from '../../../store/actions/favoriteAction'

const FavoriteAlert = ({history}) => {
    const dispatch = useDispatch()

    const openModa = () => {
        if (history.location.pathname === '/favorite') {
            dispatch(openMainModal())
        } else {
            return 
        }
    }

    return (
        <div className={classes.FavoriteModal} onClick={openModa}>
            <div className={classes.Wrapper}>
                <div className={classes.ContentWrapper}>
                    <div className={classes.Arrow}>
                        <i className={classes.ArrowUp} />
                    </div>
                    <div className={classes.Content}>
                        <h3>Поиск сохранён в разделе «Избранное»</h3>
                        <div className={classes.Redirect}>
                            <Link to='/favorite'>Перейти в избранное</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default withRouter(FavoriteAlert) 