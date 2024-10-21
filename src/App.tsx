import React, { useState } from 'react';
import AIIcon from './components/AIIcon';
import Model from './components/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  // Open modal on AIIcon click
  const handleIconClick = () => {
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <AIIcon onClick={handleIconClick} />
      {showModal && <Model  />}
    </div>
  );
};

export default App;
