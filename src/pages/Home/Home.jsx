import React, {useEffect} from 'react'
import {Navbar} from '../../components/Navbar/Navbar'
import {withRouter} from 'react-router-dom'
import classes from './Home.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {SearchInput} from '../../components/Search/SearchInput'
import { SearchVideos } from '../../components/Search/SearchVideos'
import { SearchResult } from '../../components/Search/SearchResult'
import { closeMainModal } from '../../store/actions/favoriteAction'

export const Home = ({history}) => {
    const dispatch = useDispatch()
    const homeReducer = useSelector(state => ({
        submit: state.home.submit,
        searchValue: state.home.searchValue,
        data: state.home.data
    }))

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/auth')
        }
        dispatch(closeMainModal())
        // eslint-disable-next-line
    }, [])

    const cls = [classes.SearchWrapper]
    if (homeReducer.submit) cls.push(classes.SearchSubmit)

    return (
        <>
            <Navbar />

            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <div className={cls.join(' ')}>
                        <div className={classes.Title}>
                            Поиск видео
                        </div>
                        <SearchInput/>
                        <div className={classes.ContentWrapper}>
                        {
                            homeReducer.submit && 
                            <>
                                <SearchResult />
                                {
                                    homeReducer.data 
                                    ? <SearchVideos /> 
                                    : <p style={{textAlign: 'center', marginTop: 50}}>Empty</p>
                                }
                            </>
                        }   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home)