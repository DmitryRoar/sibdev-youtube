import React, {useState} from 'react'
import classes from './Auth.module.scss'

export const Auth = () => {
    const [inputState, setInputState] = useState({
        hidden: true
    })

    const showPassword = () => {
        setInputState(prev => ({hidden: !prev.hidden}))
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Auth}>
                <div className={classes.Logo}>
                    <img src="./assets/img/sibdevLogo.svg" alt=""/>
                </div>
                
                <div className={classes.Form}>
                    <p className={classes.Title}>Вход</p>

                    <div className={classes.Input}>
                        <label htmlFor="email">Логин</label> <br/>
                        <input type='email' id='email'/>
                    </div>

                    <div className={classes.Input}>
                        <label htmlFor='password'>Пароль</label> <br/>
                        <input type={inputState.hidden ? 'password' : 'text'} id='password'/>
                        <button onClick={showPassword}>
                            {inputState.hidden ? <i class="far fa-eye-slash"></i> : <i class="far fa-eye"></i>}
                        </button>
                    </div>

                    <button className={classes.SignIn}>Войти</button>
                </div>
            </div>
        </div>
    )
}