import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import axios from 'axios';

const DownloadButton = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleDownload = async () => {
    try {
      // Load the template file from URL using Axios
      const response = await axios.get('/path/to/template.docx', {
        responseType: 'arraybuffer',
      });

      // Convert template data to array buffer
      const templateData = response.data;

      // Create new Docxtemplater instance
      const doc = new Docxtemplater();
      doc.loadZip(new PizZip(templateData));

      // Replace placeholders in template with input data
      doc.setData({
        firstName,
        lastName,
      });

      // Render the template
      doc.render();

      // Generate the output file
      const output = doc.getZip().generate({ type: 'blob' });

      // Save the file
      saveAs(output, 'info.docx');
    } catch (error) {
      console.error('Error generating document:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Имя"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Фамилия"
      />
      <button onClick={handleDownload}>Скачать DOCX</button>
    </div>
  );
};

export default DownloadButton;
