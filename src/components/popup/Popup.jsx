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
      <p>
        Вітаємо на сайті презентації Requesty! Ви зможете користуватися
        платформою вже зовсім скоро.
      </p>
      <button onClick={closeModal}>Гаразд</button>
    </Modal>
  );
};

export default Popup;
