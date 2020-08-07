import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './Auth.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {changeType, submitButton, changeInputEmail, changeInputPassword} from '../../store/actions/authAction'

const Auth = ({history}) => {
    const dispatch = useDispatch()
    const authReducer = useSelector(state => ({
        email: state.auth.email,
        password: state.auth.password,
        hidden: state.auth.passwordType,
        error: state.auth.error,
        authorized: state.auth.authorized
    }))

    const submitHandler = (event) => {
        if (!(authReducer.email.trim() && authReducer.password.trim())) return
        const data = {
            email: authReducer.email,
            password: authReducer.password,
            returnSecureToken: true
        }
        dispatch(submitButton(data, history))
        
 
        event.preventDefault()
    }

    const changeInputHandler = (input, event) => {
        if (input === 'email') {
            dispatch(changeInputEmail(event.trim()))
        } else {
            dispatch(changeInputPassword(event.trim()))
        }
    }

    const clsInputs = [classes.Input]
    if (authReducer.error) clsInputs.push(classes.error)

    return (
        <>
        <div className={classes.Wrapper}>
            <div className={classes.Auth}>
                <div className={classes.Logo}>
                    <img src="./assets/img/sibdevLogo.svg" alt="logo"/>
                </div>
                
                <form className={classes.Form} onSubmit={submitHandler}>
                    <p className={classes.Title}>Вход</p>

                    <div className={clsInputs.join(' ')}>
                        <label htmlFor="email">Логин</label> <br/>
                        <input 
                            type='email' 
                            id='email'
                            onChange={event => changeInputHandler('email', event.target.value)}
                            value={authReducer.email}
                            autoComplete='off'
                        />
                    </div>

                    <div className={clsInputs.join(' ')}>
                        <label htmlFor='password'>Пароль</label> <br/>
                        <input 
                            type={authReducer.hidden ? 'password' : 'text'} 
                            id='password'
                            onChange={event => changeInputHandler('password', event.target.value)}
                            value={authReducer.password}
                            autoComplete='off'
                        />
                        <button onClick={dispatch.bind(null, changeType())} type='button'>
                            {authReducer.hidden ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                        </button>
                    </div>

                    <button 
                    className={classes.SignIn}
                    type='submit'
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default withRouter(Auth)