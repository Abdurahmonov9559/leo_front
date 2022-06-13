import React from "react";
import './knopka.scss';


const Knopka = () => {
    return(
        <div className="knopka">
            <div className="knopka__phone">
                <a href="tel:+998950094333"><img src={require('../../assets/img/call.png')} alt="123" /></a>
            </div>
            <div className="knopka__telegram">
                <a href="https://t.me/Leonasoslar" target='_blank'><img src={require('../../assets/img/telegram.png')} alt="123" /></a>
            </div>
        </div>
    )
}

export default Knopka