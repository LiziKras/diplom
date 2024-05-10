import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import phone from '../../images/phone.svg';

function Header() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Переход на страницу Admin.tsx
        navigate("/admin");
    };

    return (
        <div className="header">
            <div className="container header_alignment">
                <div className="logotip">
                    <img src={logo} alt="" className="logo_img"/>
                    <p className="logo_txt">ЗЖБИ</p>
                </div>
                <span className="slogan_txt">
                    Прочность в каждом слое. Надежность от нашего завода железо-бетонных изделий
                </span>
                <div className="connect">
                    <div className="telefon">
                        <img src={phone} alt="" className="phone_img"/>
                        <span className="phone_txt">+7 (831) 542 66 48</span>
                    </div>
                    <span className="login_txt" onClick={handleLoginClick}>Войти</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
