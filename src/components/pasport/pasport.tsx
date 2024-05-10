import React, { useState } from 'react';
import "./pasport.css";
import print from './print.svg'
import save from './save.svg'
import Modal from '../modal/modal.tsx';

const Passport = () => {
  const [passportNumber, setPassportNumber] = useState('');
  const [date, setDate] = useState('');
  const [recipient, setRecipient] = useState('');
  const [constructionOption, setConstructionOption] = useState('option1');
  const [productMark, setProductMark] = useState('');
  const [concreteOption, setConcreteOption] = useState('option1');
  const [actualStrength, setActualStrength] = useState('');
  const [normStrength, setNormStrength] = useState('');
  const [concreteClass, setConcreteClass] = useState('option1');
  const [productWeight, setProductWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  

  const handlePassportNumberChange = (event) => {
    setPassportNumber(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleConstructionOptionChange = (event) => {
    setConstructionOption(event.target.value);
  };

  const handleProductMarkChange = (event) => {
    setProductMark(event.target.value);
  };

  const handleConcreteOptionChange = (event) => {
    setConcreteOption(event.target.value);
  };

  const handleActualStrengthChange = (event) => {
    setActualStrength(event.target.value);
  };

  const handleNormStrengthChange = (event) => {
    setNormStrength(event.target.value);
  };

  const handleConcreteClassChange = (event) => {
    setConcreteClass(event.target.value);
  };

  const handleProductWeightChange = (event) => {
    setProductWeight(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Действия по отправке формы
  };

  return (
    <div className="pasport">
      <div className="containerPasport">
        <form onSubmit={handleSubmit}>
          <label htmlFor="passport_number" className='txtForm'>Номер паспорта:</label>
          <input
            type="text"
            id="passport_number"
            name="passport_number"
            value={passportNumber}
            onChange={handlePassportNumberChange}
            className='nomerdate'
          />

          <label htmlFor="date" className='txtForm mrg-left'>Дата:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            className='nomerdate'
          /><br/><br/>

          <label htmlFor="recipient" className='txtForm'>Получатель:</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            className='poluchatel'
          /><br/><br/>

          <label htmlFor="construction_option" className='txtForm'>Наименование конструкции:</label>
          <select
            id="construction_option"
            name="construction_option"
            value={constructionOption}
            onChange={handleConstructionOptionChange}
          >
            <option value="option1">Плиты перекрытий</option>
            <option value="option2">Колонны</option>
            <option value="option3">Балки</option>
            <option value="option4">Перемычки</option>
            <option value="option5">Стойки</option>
            <option value="option6">Ограждения</option>
          </select><br/><br/>

          <label htmlFor="product_mark" className='txtForm'>ГОСТ или ТУ:</label>
          <input
            type="text"
            id="product_mark"
            name="product_mark"
            value={productMark}
            onChange={handleProductMarkChange}
            className='marka'
          /><br/><br/>

          <label htmlFor="concrete_option" className='txtForm'>Марка изделия: </label>
          <select
            id="concrete_option"
            name="concrete_option"
            value={concreteOption}
            onChange={handleConcreteOptionChange}
          >
            <option value="option1">B25</option>
            <option value="option2">B30</option>
            <option value="option3">B35</option>
            <option value="option4">F200</option>
            <option value="option5">F250</option>
            <option value="option6">F300</option>
            <option value="option7">A240</option>
            <option value="option8">A400</option>
            <option value="option9">A500</option>
            <option value="option10">ПК-50</option>
          </select><br/><br/>
          <label htmlFor="concrete_option" className='txtForm'>Отпускная прочность бетона:</label><br/><br/>
          <label htmlFor="actual_strength" className='txtForm'>Фактическая:</label>
          <input
            type="text"
            id="actual_strength"
            name="actual_strength"
            value={actualStrength}
            onChange={handleActualStrengthChange}
            className='nomerdate'
          />

          <label htmlFor="norm_strength" className='txtForm mrg-left'>По норме:</label>
          <input
            type="text"
            id="norm_strength"
            name="norm_strength"
            value={normStrength}
            onChange={handleNormStrengthChange}
            className='nomerdate' 
          /><br/><br/>

          <label htmlFor="concrete_class" className='txtForm'>Класс или марка бетона:</label>
          <select
            id="concrete_class"
            name="concrete_class"
            value={concreteClass}
            onChange={handleConcreteClassChange}
          >
            <option value="option1">B25</option>
            <option value="option2">B30</option>
            <option value="option3">B35</option>
            <option value="option4">F200</option>
            <option value="option5">F250</option>
            <option value="option6">F300</option>
            <option value="option7">A240</option>
            <option value="option8">A400</option>
            <option value="option9">A500</option>
            <option value="option10">ПК-50</option>
          </select><br/><br/>

          <label htmlFor="product_weight" className='txtForm'>Вес изделия:</label>
          <input
            type="text"
            id="product_weight"
            name="product_weight"
            value={productWeight}
            onChange={handleProductWeightChange}
            className='nomerdate'
          />
          <label htmlFor="quantity" className='txtForm mrg-left'>Количество:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className='nomerdate'
          /><br/><br/>
        </form>
        <div className="btn-send">
        <button className='buttonSend' onClick={openModal}>
          <img src={save} alt="" className="logoBtn" />
        </button>
        {modalOpen && <Modal closeModal={closeModal} />}
          <button className='buttonSend'>
            <img src={print} alt="" className="logoBtn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Passport;
