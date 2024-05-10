import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderAdmin.css";
import logo from './logo-blue.svg';
import avatar from './avatar 1.svg';
import check from './arrow-down 1.svg';
import dellete from './delete.svg';

function HeaderAdmin() {
  
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="containerHeaderAdmin">
            <div className="headeradmin">
                <div className="logoAdmin">
                    <img src={logo} alt="" className="logoAdmin-img" />
                    <p className="logoAdmin-txt">ЗЖБИ</p>
                </div>
                <div className="account">
                    <div className="menu" onClick={toggleDropdown}>
                        <img src={avatar} alt="" className="logoAvatar-img" />
                        <p className="avatar-txt">Елизавета</p>
                        <img src={check} alt="" className="check-img"/>
                        {isOpen && (
                            <ul className="dropdown-menu">
                                <img src={dellete} alt="" className="delete-img"/>
                                <Link to="/">Выйти</Link>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;
