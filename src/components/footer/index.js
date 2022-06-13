import React from "react";
import { NavLink } from "react-router-dom";
import './index.scss'
import logo from '../../assets/img/logo.png'
const Footer = () => {
    const social = [
        {
            icon: 'facebook.svg',
            link: ''
        },
        {
            icon: 'instagram.svg',
            link: ''
        },
    ]
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-3 col-md-6 mb-6 col-sm-12">
                        <img src={logo} className="footer__logo"/>
                        <a href="tel:+998974851000" className="footer__phone">+998 97 485 1000</a>
                        <a href="tel:+998950094333" className="footer__phone">+998 95 009 4333</a>
                        <div className="footer__worktime">Пн-вс: с 9:00 до 18:00</div>
                    </div>
                    <div className="col-3 col-md-6 mb-6 col-sm-12">
                        <div className="footer__title">Для клиента</div>
                        <ul className="footer__menu">
                        <li><NavLink to='/'>Как купить</NavLink></li>
                        <li><NavLink to='/'>Доставка и оплата</NavLink></li>
                        <li><NavLink to='/'>Вопросы и ответы (F.A.Q.)</NavLink></li>
                        <li><NavLink to='/'>Сервис и гарантия</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6 mb-6 col-sm-12">
                    <div className="footer__title">Для клиента</div>
                        <ul className="footer__menu">
                        <li><NavLink to='/'>Как купить</NavLink></li>
                        <li><NavLink to='/'>Доставка и оплата</NavLink></li>
                        <li><NavLink to='/'>Вопросы и ответы (F.A.Q.)</NavLink></li>
                        <li><NavLink to='/'>Сервис и гарантия</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-3 col-md-6 mb-6 col-sm-12">
                    <div className="footer__title">Для клиента</div>
                        <ul className="footer__menu">
                        <li><NavLink to='/'>Как купить</NavLink></li>
                        <li><NavLink to='/'>Доставка и оплата</NavLink></li>
                        <li><NavLink to='/'>Вопросы и ответы (F.A.Q.)</NavLink></li>
                        <li><NavLink to='/vakansi'>Вакансии</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copy">Leo nasos © 2010 Все права защищены
                    <a href="https://t.me/Abdurahmonov_9559" className="footer__author show-mobile">Разработка: Abdurahmonov</a>
                    </div>
                    <ul className="footer__social">
                    {social.map((item,index) => (
                        <li key={index}>
                            <NavLink to={item.link}>
                                <img src={require('../../assets/img/'+item.icon)}/>
                            </NavLink>
                        </li>
                    ))}
                    </ul>
                    <a href="https://t.me/Abdurahmonov_9559" className="footer__author hide-mobile">Разработка: Abdurahmonov</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer