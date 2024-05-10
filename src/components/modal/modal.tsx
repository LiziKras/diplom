import React, { useEffect } from 'react';
import './modal.css'

const Modal = ({ closeModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Успешно сохранено!</p>
      </div>
    </div>
  );
};

export default Modal;

