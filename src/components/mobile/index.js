import React, { useState, useEffect } from "react";
import home from '../../assets/img/m-home.svg'
import catalog from '../../assets/img/m-catalog.svg'
import cart from '../../assets/img/cart.svg'
import search from '../../assets/img/search.svg'
import more from '../../assets/img/m-more.svg'
import { Link, NavLink, useNavigate } from "react-router-dom";
import './index.scss'
import fav from '../../assets/img/favred.svg'
import axios from "axios";
import { useCookies } from 'react-cookie';
const Mobile = () => {
   
    const [list,setList] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3003/api/category/getall')
        .then(res => setList(res.data))
        .catch(err => console.error(err))
    },[])

    const [cookies, setCookie] = useCookies(['favs','carts'])
    const [catalogToggle,setCatalogToggle] = useState(false)
    const [searchToggle,setSearchToggle] = useState(false)
    const [moreToggle,setMoreToggle] = useState(false)
    const [resultList,setResultList] = useState([])
    const [searchText,setSearchText] = useState('')
    const [toggleSearch,setToggleSearch] = useState(false)
    const history = useNavigate()

    let favs = cookies.favs || []
    let carts = cookies.carts || []
    const searching = () => {
        if (searchText.length>2){
            axios.get(`http://localhost:3003/api/search/${searchText}`)
            .then(res => {
                if (res.data.length>0 && res.data !=='error'){
                    setResultList(res.data)
                } else {
                    setResultList([])
                }
            })

        } else {
            console.log('kam')
        }
    }

    return (
        <div className="show-mobile">
            <div className="mobile">
                <NavLink to='/' className='mobile__link'
                    onClick={()=>{
                        setCatalogToggle(false)
                        setSearchToggle(false)
                        setMoreToggle(false)
                        }}>
                    <img src={home} />
                    Главная
                </NavLink>
                <button className="mobile__link" onClick={()=>{
                    setCatalogToggle(!catalogToggle)
                    setSearchToggle(false)
                    setMoreToggle(false)
                    }}>
                    <img src={catalog}/>
                    Каталог
                </button>
                <NavLink to='/cart' className='mobile__link'>
                    <img src={cart} />
                    Корзина
                </NavLink>
                <button className="mobile__link" onClick={()=>{
                    setCatalogToggle(false)
                    setSearchToggle(!searchToggle)
                    setMoreToggle(false)
                }}>
                    <img src={search}/>
                    Поиск
                </button>
                <button className="mobile__link" onClick={()=>{
                    setCatalogToggle(false)
                    setSearchToggle(false)
                    setMoreToggle(!moreToggle)
                }}>
                    <img src={more}/>
                    Ещё
                </button>
            </div>
            <div className={"modal " + (catalogToggle ? 'show' : '')}>
                <div className="modal__box">
                    <div className="modal__title mb-2">
                        Каталог
                        <button className="modal__close" onClick={()=>{
                            setCatalogToggle(!catalogToggle)
                            setSearchToggle(false)
                            setMoreToggle(false)
                        }}></button>
                    </div>
                    <div className="modal__body">
                        <ul className="modal__catalog">
                            {list.map(item => (
                                <li key={item._id}>
                                    <NavLink to={`/category/${item._id}`}
                                    onClick={()=>{
                                        setCatalogToggle(!catalogToggle)
                                    }}>
                                    <img src={'http://localhost:3003/'+item.img}/>
                                    <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"modal " + (searchToggle ? 'show' : '')}>
                <div className="modal__box">
                    <div className="modal__title mb-2">
                        Поиск
                        <button className="modal__close" onClick={()=>{
                            setCatalogToggle(false)
                            setSearchToggle(!searchToggle)
                            setMoreToggle(false)
                        }}></button>
                    </div>
                    <div className="modal__body">
                        <form className="modal__search">
                            <input type='text' placeholder="Введите запрос, например «Smart balance»"
                            onInput={(event)=> { 
                                setSearchText(event.target.value)
                                searching() 
                            }}
                            value={searchText}/>
                            <div className="searchbox__result">
                    <div className="container">
                        <ul>
                            {resultList.map(item => (
                                <li key={item._id} onClick={()=>{
                                    setSearchToggle(!searchToggle)
                                }}>
                                    <span className="searchbox__item"
                                    onClick={()=>{ 
                                        setSearchText('')
                                        setResultList([])
                                        setToggleSearch(false)
                                        history(`/product/${item._id}`)
                                    }}
                                    >
                                        <span style={{
                                            backgroundImage: `url("http://localhost:3003/${item.img}")`
                                        }}
                                        
                                        className="searchbox__img"
                                        ></span>
                                        <span className="searchbox__title">{item.title}</span>
                                        <span className="searchbox__price">
                                            <div className="old">{item.sale>0?item.price:''}</div>
                                            <div className="new">{item.sale>0?item.price*(100-item.sale)/100:item.price}$</div>
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={"modal " + (moreToggle ? 'show' : '')}>
                <div className="modal__box">
                    <div className="modal__title mb-2">
                        Еще
                        <button className="modal__close" onClick={()=>{
                            setCatalogToggle(false)
                            setSearchToggle(false)
                            setMoreToggle(!moreToggle)
                        }}></button>
                    </div>
                    <div className="modal__body">
                        <div className="modal__btns">
                            <Link to='/cart' className="btn no" onClick={()=>{
                            setMoreToggle(!moreToggle)
                        }}>
                                <span className="count">{carts.length}</span>
                                <img src={cart}/>
                            </Link>
                            <Link to='/fav' className="btn no" onClick={()=>{
                            setMoreToggle(!moreToggle)
                        }}>
                                <span className="count">{favs.length}</span>
                                <img src={fav}/>
                            </Link>
                        </div>
                        <ul className="modal__more">
                            <li><Link to='/about' onClick={()=>{
                            setMoreToggle(!moreToggle)}}>О компании</Link></li>
                            {/* <li><Link to='/promo' onClick={()=>{ */}
                            {/* setMoreToggle(!moreToggle)}}>Акции</Link></li> */}
                            {/* <li><Link to='/'>Рассрочка 0–0-12</Link></li> */}
                            {/* <li><Link to='/'>Сервис и ремонт</Link></li> */}
                            {/* <li><Link to='/'>Опт/дропшиппинг</Link></li> */}
                            <li><Link to='/contact' onClick={()=>{
                            setMoreToggle(!moreToggle)}}>Контакты</Link></li>
                            <li><Link to='/user/private' onClick={()=>{
                            setMoreToggle(!moreToggle)}}>Личные данные</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile