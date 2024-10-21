import React, { useState } from 'react';

import './Modal.css'; 
import { Button, Modal } from 'react-bootstrap';

function Model() {
  const [showModal, setShowModal] = useState(false);
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  const handleClose = () => setShowModal(false); 
  const handleShow = () => setShowModal(true);
 
  // Dummy generate function
  const handleGenerate = () => {
    setResponse('Thank you for the opportunity! If you have any more questions, feel free to ask.');
  };

  // Insert the response into LinkedIn's message input field
  const handleInsert = () => {
    const messageInput = document.querySelector('textarea[name="message"]'); // Adjust the selector if necessary
    if (messageInput) {
      (messageInput as HTMLTextAreaElement).value = response;
    }
    handleClose(); // Close the modal after inserting
  };

  return ( 
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            className="border p-2 mb-4 w-full"
            placeholder="Enter command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
          />
          <button onClick={handleGenerate} className="bg-blue-500 text-white p-2 rounded mb-4">
            Generate
          </button>
          <p>{response}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleInsert}>
            Insert
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
