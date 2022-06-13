import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
const Menu = () => {

    const [cookies, setCookie] = useCookies(['user'])

    let user = cookies.user

    return (
        <ul className='userpage__menu'>
            <li><NavLink to='/user/information'>Общие сведения</NavLink></li>
            <li><NavLink to='/user/private'>Личные данные</NavLink></li>
            <li><NavLink to='/user/history'>История покупок</NavLink></li>
            <li><NavLink to='/fav'>Избранное</NavLink></li>
            <li><NavLink to='/user/pass'>Сменить пароль</NavLink></li>
            <li><NavLink to='/user/logout' className={`${user?'show':'none'}`}>Выйти</NavLink></li>
        </ul>
    )
}

export default Menu