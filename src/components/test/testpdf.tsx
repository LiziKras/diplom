import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface FormData {
  name: string;
  email: string;
}

const FormComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleFormSubmit = () => {
    // Форматирование текста для PDF
    const formattedText = `Пользователь ${formData.name}, почта ${formData.email}.`;
    
    // Генерация PDF-документа с указанием кодировки windows-1251
    const doc = new jsPDF();
    doc.setFont('times');
    doc.text(10, 10, formattedText, { encoding: 'windows-1251' });
    doc.save('form_data.pdf'); // Сохраняем PDF-документ
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <input type="text" name="name" placeholder="Введите имя" onChange={handleInputChange} />
      <input type="text" name="email" placeholder="Введите email" onChange={handleInputChange} />
      <button onClick={handleFormSubmit}>Создать документ</button>
    </div>
  );
};

export default FormComponent;
