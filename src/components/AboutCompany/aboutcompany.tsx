import React from "react";
import "./aboutcompany.css";
import proizvodstvo from "../../images/proizvodstvo.svg"
import ecologi from "../../images/ecologi.svg"

function AboutCompany() {
  
  return (
    <div className="aboutcompany">
        <div className="container_aboutcompany">
            <div className="left">
                <div className="txt-bold">
                    <span className="txt-ZAO">ЗАО</span> завод ЖБИ «Арьевский» был основан в 1971 году рядом со станцией Арья <br />
                    Горьковской железной дороги в 5-ти километрах от трассы Нижний Новгород – <br />
                    Киров, в 220 километрах от Нижнего Новгорода. <br />
                </div>
                <div className="txt-reg">
                    С 2019 года ЗАО ЗЖБИ "Арьевский" запустил производство композитной <br />
                    арматуры, строительных арболитовых блоков и новых опор СВ 164 - 12 для <br />
                    высоковольтных линий электропередач     
                </div>
            </div>
            <div className="right">
                <div className="info">
                    <img src= {proizvodstvo} alt="" className="icon-info"/>
                    <div className="description">
                        <p className="title-desc">Собственное производство</p>
                        <span className="subtitle-desc">Высокий уровнень технологий позволяет 
                            гарантировать качество продукции на 
                            протяжении более чем 50 лет</span>
                    </div>
                </div>
                <div className="info">
                    <img src= {ecologi} alt="" className="icon-info"/>
                    <div className="description">
                        <p className="title-desc">Экологичность и доступность</p>
                        <span className="subtitle-desc">Уникальный состав делает продукцию 
                        завода безопасной для потребителя</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default AboutCompany;
