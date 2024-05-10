import React from "react";
import "./Advantages.css";
import rub from "../../images/p.svg"
import medal from "../../images/medal.svg"
import security from "../../images/security.svg"


function Advantages() {
  
  return (
    <div className="Advantages">
        <div className="container_Advantages">
            <p className="our-adv">Наши преимущества</p>
            <div className="adv">
              <div className="example">
                <img src={rub} alt="" className="icon-adv"/>
                <p className="title-adv">Бесплатный возврат</p>
                <span className="subtitle-adv">Мы уверены в качестве наших продуктов, 
                поэтому предоставляем гарантию возврата средств в случае обнаружения дефектов или неполадок.</span>
              </div>

              <div className="example">
                <img src={medal} alt="" className="icon-adv"/>
                <p className="title-adv">Гарантия 10 лет</p>
                <span className="subtitle-adv">Двойной контроль качества гарантирует 
                долгосрочную безупречную работу изделий.</span>
              </div>

              <div className="example">
                <img src={security} alt="" className="icon-adv"/>
                <p className="title-adv">Безопасная оплата</p>
                <span className="subtitle-adv">Банковской картой или наличными при получении. </span>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Advantages;
