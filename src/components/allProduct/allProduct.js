import React,{useState,useEffect} from "react";
// import Breadcrumbs from "../breadcrumbs";
import Item from "../products/item";
import axios from 'axios'
import { useParams } from "react-router-dom";
import Oneclick from "../products/oneclick";
import './allProduct.scss';

const AllProduct = ()=>{
    const [products,setProducts] = useState([])
    const [toggle,setToggle] = useState(false)
    const [oneid,setOneId] = useState('')

    const showOneClick = (id) => {
        setToggle(true)
        setOneId(id)
    }
    let {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3003/api/allproduct`)
        .then(res => {
            if (res.data == 'error'){
                console.log(res.data)
            } else {
                setProducts(res.data)
            }
        })
    },[id])
    return (
        <>
            <div className="allProduct">
                <div className="container">
                    {/* <Breadcrumbs /> */}
                    <h1 className="mb-3">Просмотренные товары</h1>
                    <div className="row col3 d-flex">
                        {products.map(product=>(
                            <Item key={product._id} product={product} showOneClick={(id)=>{showOneClick(id)}}/>
                        ))}
                    </div>
                </div>
            </div>
            {toggle?(<Oneclick id={oneid} toggle={toggle} changeToggle={()=>{ setToggle(false) }}/>):''}
        </>
        
    )
}

export default AllProduct