import React from "react";
import "./Navigation_page.css";
import detail from "../../images/logo2.svg"

function NavigationPage() {
  
  return (
    <div className="navpage">
        <div className="container">
            <div className="left">
                <p className="txt_name">Завод ЖБИ <br /> "Арьевский"  </p>
                <div className="menu">
                    <ul className="menu_list">
                        <li><a href="">О компании</a></li>
                        <div className="bb"></div>
                        <li><a href="">О продукции</a></li>
                        <div className="bb"></div>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <img src={detail} alt="" className="img_detail"/>
            </div>
        </div>
        
    </div>
  );
}

export default NavigationPage;
