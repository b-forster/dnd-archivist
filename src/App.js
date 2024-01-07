import { useState } from 'react';
import './App.css';
import Modal from 'react-modal';
import Header from './Header';

Modal.setAppElement(document.getElementById('root'));

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  // function afterOpenModal() {
  // references are now sync'd and can be accessed.
  // }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Header />
      <nav>
        <a onClick={openModal}>+ Create a Character</a>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Create Character"
      ></Modal>
    </div>
  );
}

export default App;
