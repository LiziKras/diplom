import React, { useState } from 'react';
import "./asidebar.css";
import journal from './journal.svg'
import passport from './passport.svg'
import sertificat from './sertificat.svg'
import Passport from '../pasport/pasport.tsx';
import TabTable from '../table/table.tsx'

const AsideBarAdmin = () => {
  const [activeTab, setActiveTab] = useState('ingredients');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="burger-tabs">
      <div className="tab-buttons ">
        <button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => handleTabClick('ingredients')}
        >
          <img src={passport} alt="" className="logoAsideBarMenu" />
          <p className='txt-button-admin'>Паспорт качества</p>
        </button>
        <button
          className={activeTab === 'nutrition' ? 'active' : ''}
          onClick={() => handleTabClick('nutrition')}
        >
          <img src={sertificat} alt="" className="logoAsideBarMenu" />
          <p className='txt-button-admin'>Сертификаты качества</p>
        </button>
        <button
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => handleTabClick('reviews')}
        >
          <img src={journal} alt="" className="logoAsideBarMenu" />
          <p className='txt-button-admin'>Журнал приемочного контроля</p>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'ingredients' && (
          <div className='pasportBlock'>
            <Passport />
          </div>
        )}
        {activeTab === 'nutrition' && (
          <div>
            
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <TabTable />  
          </div>
        )}
      </div>
    </div>
  );
};

export default AsideBarAdmin;
