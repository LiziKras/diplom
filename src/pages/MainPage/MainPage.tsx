import React from "react";
import './MainPage.css';
import Header from '../../components/Header/Header.tsx';
import NavigationPage from "../../components/navigation_page/Navigation_page.tsx";
import AboutCompany from "../../components/AboutCompany/aboutcompany.tsx";
import SwiperComponent from "../../components/Swiper/Swiper.tsx";
import ZakazProd from "../../components/ZakazProd/ZakazProd.tsx";
import Advantages from "../../components/Advantages/Advantages.tsx";
import Baner from "../../components/Baner/Baner.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const MainPage = () => {
    return (
      <div className="container_main">
        <Header />
        <NavigationPage />
        <AboutCompany />
        <SwiperComponent />
        <ZakazProd />
        <Advantages />
        <Baner />
        <Footer />
      </div>
    );
  };
  export default MainPage;