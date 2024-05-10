import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css";
import stoika from "../../images/stoika.svg"

function SwiperComponent() {
    useEffect(() => {
        const mySwiper = new Swiper(".swiper-container", {
          slidesPerView: 3,
          spaceBetween: 30,
          observer: true, // добавляем наблюдателя
          // Добавьте другие настройки свайпера здесь по вашему усмотрению
        });
      }, []);
  
    return (
      <div className="swiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src={stoika} alt="" />
            </div>
            <div className="swiper-slide">
                <img src={stoika} alt="" />
            </div>
            <div className="swiper-slide">
                <img src={stoika} alt="" />
            </div>
            {/* Добавьте нужное количество слайдов здесь */}
          </div>
        </div>
      </div>
    );
  }
  
  export default SwiperComponent;
