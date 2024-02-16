import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Modal = ({onClose}) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      <h2 id='modal-title'>Hello, I am a modal</h2>
      <button id='close-modal-button' onClick={onClose}>
        Close Modal
      </button>
    </div>,
    document.getElementById('modal-root')
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button id='open-modal-button' onClick={handleOpen}>
        Open Modal
      </button>
      {isOpen && <Modal onClose={handleClose} />}
    </div>
  );
}

export default App;
