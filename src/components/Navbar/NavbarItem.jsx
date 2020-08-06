import React from 'react'
import classes from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

export const NavbarItem = ({path, title}) => {
    return (
        <li>
            <NavLink to={path} exact activeClassName={classes.active}>
                {title}
            </NavLink>
    </li>
    )
}