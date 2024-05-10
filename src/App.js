import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Здесь может быть ваш заголовок */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
