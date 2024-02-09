import { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;