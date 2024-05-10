import React from "react";
import './Admin.css';
import HeaderAdmin from '../../components/HeaderAdmin/headerAdmin.tsx';
import AsideBarAdmin from "../../components/AsideBarAdmin/asidebar.tsx";

const Admin = () => {
    return (
      <div className="container_main">
          <HeaderAdmin />
          <AsideBarAdmin />
      </div>
    );
  };
  export default Admin;