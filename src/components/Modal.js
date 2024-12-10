import React from 'react';
import './styles/Modal.css';

const Modal = ({ show, handleClose }) => {
  return (
    show && (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
          <h2>Modal Title</h2>
          <p>This is a modal component for displaying important information.</p>
        </div>
      </div>
    )
  );
};

export default Modal;
