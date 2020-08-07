import React, {useState} from 'react'
import classes from './Navbar.module.scss'
import {NavLink, Link} from 'react-router-dom'
import {NavbarItem} from './NavbarItem'

export const Navbar = () => {
    const [items] = useState([
        {id: 1, path: '/', title: 'Поиск'},
        {id: 2, path: '/favorite', title: 'Избранное'}
    ])

    const logoutHandler = () => {
        localStorage.clear()
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.NavbarWrapper}>
                <div className={classes.Navbar}>
                    <nav>
                        <ul>
                        <li>
                            <NavLink to='/' activeClassName={classes.trolling}>
                                <img src='./assets/img/sibdevLogo.svg' alt='logo'/>
                            </NavLink>
                            </li>
                        {items.map(item => (
                            <NavbarItem path={item.path} title={item.title} key={item.id}/>
                        ))}
                        </ul>
                    </nav>
                </div>

                <div className={classes.LogoutWrapper}>
                    <Link to='/auth' onClick={logoutHandler}>Выйти</Link>
                </div>
            </div>
        </div>
    )
}