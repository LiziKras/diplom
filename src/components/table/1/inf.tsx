import React, { useState } from 'react';
import './inf.css';

function Inf() {
  // Состояния для хранения значений полей и дат
  const [input1Value, setInput1Value] = useState('ЗАО ЗЖБИ "Арьевский"');
  const [input2Value, setInput2Value] = useState('ЖБИ-001: Плита перекрытия типа ПП-120/10');
  const [input3Value, setInput3Value] = useState('Нижегородская обл. Уренский район. р.п. Арья ул. Строителей 10');
  const [input4Value, setInput4Value] = useState('');
  const [input5Value, setInput5Value] = useState('');
  const [input6Value, setInput6Value] = useState('');
  const [bigTextareaValue, setBigTextareaValue] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');

  return (
    <div className='container-Inf'>
      {/* Заблокированные поля */}
      <div className="input-group">
        <label htmlFor="input1">Организация: </label>
        <input type="text" id="input1" value={input1Value} readOnly className='input-inf' />
      </div>
      <div className="input-group">
        <label htmlFor="input2">Наименование объекта: </label>
        <input type="text" id="input2" value={input2Value} readOnly className='input-inf'/>
      </div>
      <div className="input-group">
        <label htmlFor="input3">Адрес: </label>
        <input type="text" id="input3" value={input3Value} readOnly className='input-inf'/>
      </div>

      {/* Большой текстовый блок */}
      <div className="input-group-big-txt">
        <label htmlFor="" className='proectDan'>Проектные данные:</label>
        <label htmlFor="bigTextarea" >1. Класс бетона по прочности на сжатие конструктивных элементов</label>
        <textarea
          id="bigTextarea"
          value={bigTextareaValue}
          onChange={(e) => setBigTextareaValue(e.target.value)}
          rows={5}
          cols={50}
          className='big-text'
        />
      </div>

      {/* 3 обычных инпута */}
      <div className="input-group">
        <label htmlFor="input4">Объем бетона общий:</label>
        <input
          type="text"
          id="input4"
          value={input4Value}
          onChange={(e) => setInput4Value(e.target.value)}
          className='input-izm-inf'
        />
        <label htmlFor=""> куб. м</label>
      </div>
      <div className="input-group">
        <label htmlFor="input5">Объем бетона армированого:</label>
        <input
          type="text"
          id="input5"
          value={input5Value}
          onChange={(e) => setInput5Value(e.target.value)}
          className='input-izm-inf'
        />
        <label htmlFor=""> куб. м</label>
      </div>
      <div className="input-group">
        <label htmlFor="input6">Производитель работ </label>
        <input
          type="text"
          id="input6"
          value={input6Value}
          onChange={(e) => setInput6Value(e.target.value)}
          className='input-izm-inf'
        />
      </div>

      {/* 2 поля формата даты */}
      <div className="input-group">
        <label htmlFor="date1">Ведение журнала: начало </label>
        <input
          type="date"
          id="date1"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="date2">Ведение журнала: окончание</label>
        <input
          type="date"
          id="date2"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Inf;
