import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="ReactModal"
    >
      <p>Вітаємо на сайті презентації Requesty!</p>
      <button onClick={closeModal}>Закрити</button>
    </Modal>
  );
};

export default Popup;