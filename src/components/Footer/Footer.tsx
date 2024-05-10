import React from "react";
import "./Footer.css";
import marker from "../../images/marker.svg"
import phone from "../../images/phone.svg"

function Footer() {
  
  return (
    <div className="Footer">
        <div className="container_Footer">
          <div className="example">
            <div className="item">
              <img src={marker} alt="" className="marker"/>
              <p className="title-adv">О компании</p>
            </div>
            <div className="item">
              <img src={marker} alt="" className="marker"/>
              <p className="title-adv">Сотрудничество</p>
            </div>
            <div className="item">
              <img src={marker} alt="" className="marker"/>
              <p className="title-adv">Покупателям</p>
            </div>
          </div>

          <div className="example">
            <div className="item">
              <img src={marker} alt="" className="marker"/>
              <p className="title-adv">Где купить?</p>
            </div>
            <div className="item">
              <img src={marker} alt="" className="marker"/>
              <p className="title-adv">Сервисное обслуживание</p>
            </div>
            <div className="item">
              <img src={marker} alt="" className="marker"/>
              <p className="title-adv">Контакты</p>
            </div>
          </div>

          <div className="example">
            <div className="item">
              <img src={phone} alt="" className="marker"/>
              <p className="title-adv">+7 (495) 543 23 45</p>
            </div>
            <div className="item">
              <p className="title-adv">hello@orangemixers.ru</p>
            </div>
          </div>  
        </div>
    </div>
  );
}

export default Footer;
