import React, {useEffect} from 'react'
import {Navbar} from '../../components/Navbar/Navbar'
import {withRouter} from 'react-router-dom'
import classes from './Home.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {submitButton, searchVideos} from '../../store/actions/homeAction'
import {SearchInput} from '../../components/SearchInput/SearchInput'

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
    // eslint-disable-next-line
    }, [])

    const submitHandler = async (event) => {
        dispatch(submitButton())
        dispatch(searchVideos(homeReducer.searchValue))

        event.preventDefault()
    }

    const cls = [classes.SearchWrapper]
    if (homeReducer.submit) cls.push(classes.SearchSubmit)
    console.log(homeReducer.data)

    return (
        <>
            <Navbar />
            <div className={classes.Wrapper}>
                <div className={classes.Content}>
                    <div className={cls.join(' ')}>
                        <div className={classes.Title}>
                            Поиск видео
                        </div>
                        <form className={classes.Form} onSubmit={submitHandler}>
                            <SearchInput />
                            <button type="submit" className={classes.SubmitBtn}>Найти</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home)