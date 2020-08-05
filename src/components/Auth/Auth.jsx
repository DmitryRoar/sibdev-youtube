import React, {useState} from 'react'
import classes from './Auth.module.scss'
import {authToken} from '../../environment/environment'

import axios from 'axios'

export const Auth = () => {
    const [inputState, setInputState] = useState({
        email: '',
        password: '',
        hidden: true,
        error: false
    })


    const showPassword = () => {
        setInputState(prev => ({hidden: !prev.hidden}))
    }

    const authHandler = async () => {
        try {
            if (!(inputState.email.trim() && inputState.password.trim())) return


            const data = {
                email: inputState.email,
                password: inputState.password,
                returnSecureToken: true
            }
    
            await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authToken}`, data)
        } catch (e) {
            setInputState({
                email: '',
                password: '',
                hidden: true,
                error: true
            })
            console.log(e)
        }
    }

    const inputHandler = (prop, event) => {
        setInputState((prev) => ({...prev, [prop]: event}))
    }

    const clsInputs = [classes.Input]
    if (inputState.error) clsInputs.push(classes.error)

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Auth}>
                <div className={classes.Logo}>
                    <img src="./assets/img/sibdevLogo.svg" alt=""/>
                </div>
                
                <div className={classes.Form}>
                    <p className={classes.Title}>Вход</p>

                    <div className={clsInputs.join(' ')}>
                        <label htmlFor="email">Логин</label> <br/>
                        <input 
                            type='email' 
                            id='email'
                            onChange={event => inputHandler('email', event.target.value.trim())}
                            value={inputState.email}
                        />
                    </div>

                    <div className={clsInputs.join(' ')}>
                        <label htmlFor='password'>Пароль</label> <br/>
                        <input 
                            type={inputState.hidden ? 'password' : 'text'} 
                            id='password'
                            onChange={event => inputHandler('password', event.target.value.trim())}
                            value={inputState.password}
                        />
                        <button onClick={showPassword}>
                            {inputState.hidden ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                        </button>
                    </div>

                    <button 
                    className={classes.SignIn}
                    onClick={authHandler}
                    >
                        Войти
                    </button>
                </div>
            </div>
        </div>
    )
}