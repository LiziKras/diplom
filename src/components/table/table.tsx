import React, { useState } from 'react';
import './table.css'; // Подключаем файл стилей
import Inf from './1/inf.tsx';

function TabTable() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Информация о журнале</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Журнал</button>
      </div>
      <div className="table">
        {activeTab === 'tab1' && (
          <Inf />
        )}
        {activeTab === 'tab2' && (
          2
        )}
      </div>
    </div>
  );
}

export default TabTable;
