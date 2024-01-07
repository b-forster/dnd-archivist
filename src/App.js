import './App.css';
<<<<<<< HEAD
import { Header, ModalContent } from './components';
=======
import Modal from 'react-modal';
import { Header, ModalContent } from './components';

Modal.setAppElement(document.getElementById('root'));
>>>>>>> 6286bce (Add ModalContent component with some basic create character form elements)

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <ModalContent />
=======
      <nav>
        <a onClick={openModal}>+ Create a Character</a>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Create Character"
      >
        <ModalContent />
      </Modal>
>>>>>>> 6286bce (Add ModalContent component with some basic create character form elements)
    </div>
  );
}

export default App;
