import React from "react";
import './page.scss'
import email from '../../assets/img/email.svg'
import clock from '../../assets/img/clock.svg'
import Feedback from "../feedback";

const Contact = () => {
    return (
        <div className="container">
            <div className="btitle mb-3">Контакты</div>
            <div className="row">
                <div className="col-4 col-md-6 col-sm-12 sm-order-2">
                    <div className="contact__list">
                        <div className="contact__item">
                            <div className="contact__address">СПб, Ул. Дыбенко д.23 к.1</div>
                            <a href="tel:+998950094333" className="contact__phone">+998 95 009 4333</a>
                        </div>
                        <div className="contact__item">
                            <div className="contact__address">СПб, Ул. Дыбенко д.23 к.1</div>
                            <a href="tel:+998974851000" className="contact__phone">+998 97 485 1000</a>
                        </div>
                        <div className="contact__body">
                            <div className="contact__worktime">
                                <img src={clock}/>
                                <div>
                                    <div className="contact__worktime--top">Режим работы</div>
                                    <div className="contact__worktime--bottom">Пн-вс с 9:00 до 18:00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-6 col-sm-12 sm-order-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5989.673069914397!2d69.23835843801498!3d41.35590662373503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c8c61634bdf%3A0x307e33d8a77ce2e3!2z0JTQttCw0LzQuA!5e0!3m2!1sru!2s!4v1654517057285!5m2!1sru!2s" width="860" height="512" style={{border:0}} className='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Feedback title='Связаться с нами'/>
        </div>
    )
}

export default Contact
