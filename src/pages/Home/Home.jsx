import React, {useEffect} from 'react'
import {Navbar} from '../../components/Navbar/Navbar'
import {withRouter} from 'react-router-dom'
import classes from './Home.module.scss'

export const Home = ({history}) => {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/auth')
        }
    }, [])

    const submitHandler = (event) => {
        console.log('hello :)')
        event.preventDefault()
    }

    return (
        <>
            <Navbar/>
            <div className={classes.Wrapper}>
                <div className={classes.SearchWrapper}>
                    <div className={classes.Title}>
                        Поиск видео
                    </div>
                    <form className={classes.Form} onSubmit={submitHandler}>
                        <input type="text" placeholder='Что хотите посмотреть?'/>
                        <button type="submit">Найти</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home)