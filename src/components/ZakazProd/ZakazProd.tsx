import React from "react";
import "./ZakazProd.css";
import photo from "../../images/zbi_adm.jpg"

function ZakazProd() {
  
  return (
    <div className="ZakazProd">
          <div className="container_ZakazProd">
              <div className="zakaz">
                <p className="txt-title">Заказ продукции</p>
                <span className="txt-subtitle">Для того чтобы заказать продукцию обращайтесь в отдел маркетинга(телефон многоканальный), 
                  для выбора марки продукции просмотрите каталог, цены предоставлены в прайсе, также для ускорения 
                  доставки к потребителю у нас имеется дополнительный склад в г. Нижний Новгород</span>
                  <p className="txt-title2">Режим работы</p>
                  <span className="txt-subtitle">ПН-ПТ - с 08:00 до 17:00 <br />
                        СБ-ВС - выходной <br />
                        Перерыв обед с 12:00 до 13:00</span>
              </div>
              <img src={photo} alt="" className="photo"/>
          </div>
    </div>
  );
}

export default ZakazProd;
